const circomlib = require("circomlib");
const snarkjs = require("snarkjs");
const bigInt = snarkjs.bigInt;
const crypto = require("crypto");
const merkleTree = require("./circuits/MerkleTree");
const websnarkUtils = require("websnark/src/utils");
const buildGroth16 = require("websnark/src/groth16");
const circuit = require("./circuits/withdraw.json");

const rbigint = (nbytes) =>
  snarkjs.bigInt.leBuff2int(crypto.randomBytes(nbytes));

const pedersenHash = (data) =>
  circomlib.babyJub.unpackPoint(circomlib.pedersenHash.hash(data))[0];

export const toHex = (number, length = 32) => {
  const str =
    number instanceof Buffer
      ? number.toString("hex")
      : bigInt(number).toString(16);
  return "0x" + str.padStart(length * 2, "0");
};
const MERKLE_TREE_HEIGHT = 20;

function createDeposit({ nullifier, secret }) {
  const deposit = { nullifier, secret };
  deposit.preimage = Buffer.concat([
    deposit.nullifier.leInt2Buff(31),
    deposit.secret.leInt2Buff(31),
  ]);
  deposit.commitment = pedersenHash(deposit.preimage);
  deposit.commitmentHex = toHex(deposit.commitment);
  deposit.nullifierHash = pedersenHash(deposit.nullifier.leInt2Buff(31));
  deposit.nullifierHex = toHex(deposit.nullifierHash);
  return deposit;
}

export const generatePrivateNote = (currency, amount, netId) => {
  const deposit = createDeposit({
    nullifier: rbigint(31),
    secret: rbigint(31),
  });
  const note = toHex(deposit.preimage, 62);
  const noteString = `wide-${currency.toLowerCase()}-${amount}-${netId}-${note}`;

  const randomBuffer = crypto.randomBytes(4);
  const fileName = `backup-wide-${currency.toLowerCase()}-${amount}-${netId}-${toHex(
    randomBuffer,
    2
  )}.txt`;
  return {
    notes: noteString,
    deposit,
    fileName,
  };
};

import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  border: 2px solid;
  background-color: white;
  border-color: ${({ theme }) => theme.colors.primary};
  border-radius: 22px;
  padding: 0 30px;
  box-sizing: border-box;
`;

export default StyledInput;
// export default ({
//   options,
//   selected,
//   placeholder,
//   onChange,
// }: DropDownProps) => {
//   const selectEl = useRef(null);
//   const focused = useFocusTracker(selectEl, true);

//   return (
//     <StyledInput ref={selectEl} opened={focused}>
//       <StyledTytle>
//         {selected !== undefined ? options[selected] : placeholder}
//       </StyledTytle>
//       {focused && (
//         <StyledDropDownList>
//           {options.map((option, i) => (
//             <StyledDropDownOption onClick={() => onChange(i)}>
//               <div>{option}</div>
//             </StyledDropDownOption>
//           ))}
//         </StyledDropDownList>
//       )}
//     </StyledInput>
//   );
// };

const SectionItem = ({
  isSelected,
  label,
  onClick,
}: {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}) => (
  <li
    onClick={onClick}
    className={`cursor-pointer p-4 rounded-lg text-[18px] leading-[27px] text-[#051d49] 
        ${isSelected ? "bg-[#f4f8fe] text-[#0f6cbd]" : ""}`}
  >
    {label}
  </li>
);

export default SectionItem;

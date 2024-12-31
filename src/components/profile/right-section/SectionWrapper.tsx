const SectionWrapper = ({
  children,
  title,
  onEdit,
}: {
  children: React.ReactNode;
  title: string;
  onEdit?: () => void;
}) => {
  return (
    <li className=" border border-[#f8f9fa]  bg-white rounded-[20px] p-10 shadow-[0px_4px_20px_0px_rgba(238,238,238,0.5)]">
      <div className="flex justify-between">
        <span className="text-[20px] leading-[30px] text-[#151d48] font-semibold  ">
          {title}
        </span>
        <button
          className="bg-[#0f6cbd] w-[104px] text-white rounded-[4px] border pt-2 pb-2  "
          onClick={onEdit}
        >
          Edit
        </button>
      </div>
      {children}
    </li>
  );
};

export default SectionWrapper;

import HorizontalLine from "@/components/contract/HorizontalLine";

interface props {
  title: string;
}

const SectionHeader = ({ title }: props) => (
  <div className="flex items-center">
    <p className="me-3 text-transparent bg-clip-text font-bold bg-text-gradient">
      {title}
    </p>
    <HorizontalLine />
  </div>
);

export default SectionHeader;

import { HiInformationCircle, HiOutlineInformationCircle } from "react-icons/hi";

interface NoticeProps {
  Supporting: string;
  Headline: string;
}
export default function Notice(props: NoticeProps) {
  return (
    <section className="rounded-lg bg-primary-200/40">
      <div className="flex items-start gap-4 px-4 py-5 overflow-hidden sm:p-6">
        <div className="mt-1">
          <HiOutlineInformationCircle className="w-6 h-6" />
        </div>
        <div className="">
          <p className="p-0 m-0 title-medium text-primary-950">{props.Headline}</p>
          <p className="p-0 m-0 body-medium text-primary-950">{props.Supporting}</p>
        </div>
      </div>
    </section>
  );
}

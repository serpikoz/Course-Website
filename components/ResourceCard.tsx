import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

interface Props {
  id: string;
  title: string;
  image: string;
  downloadNumber: number;
  slug: string;
}

const ResourcesCard = ({ id, title, image, downloadNumber, slug }: Props) => {
  return (
    <Card className="w-full max-w-fit border-0 !bg-transparent sm:max-w-[356px]">
      <Link href={`/resource/${id}`}>
        <CardHeader className="flex-centr flex-col gap-2.5 !p-0">
          <div className="h-fit w-full ">
            <Image
              src={image}
              className="h-full rounded-md object-cover"
              width={384}
              height={440}
              alt={title}
            />
          </div>

          <CardTitle className="text-white paragraph-semibold line-clamp-1 w-full text-left">
            {title}
          </CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
      </Link>

      <CardContent className="flex-between mt-4 p-0 ">
        <div className="flex-center body-medium gap-1.5 text-white">
          <Image src="/downloads.svg" width={20} height={20} alt="content" />
          {`${downloadNumber}`}
        </div>
      </CardContent>
    </Card>
  );
};

export default ResourcesCard;
import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";

export default function Breadcrumb() {
  const router = useRouter();
  const pathnames = router.pathname.split("/").filter((x) => x);
  return (
    <nav aria-label="breadcrumb">
      <ol className="flex items-center mb-4 space-x-3 capitalize body-medium">
        <li className="breadcrumb-item">
          <Link href="/">Home</Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          return (
            <li
              key={routeTo}
              className={clsx(
                "breadcrumb-item",
                isLast && "active"
              )}
              aria-current={isLast ? "page" : undefined}
            >
              {isLast ? name : <Link href={routeTo}>{name}</Link>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

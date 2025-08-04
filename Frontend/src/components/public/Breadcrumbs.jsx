import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const routeNameMap = {
  "/": "Home",
  "/services": "Services",
  "/contact": "Contact",
  "/franchise": "Franchise",
  "/support": "Support",
  // Add more routes as needed
};

function Breadcrumbs() {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);

  const breadcrumbs = paths.map((_, index) => {
    const to = "/" + paths.slice(0, index + 1).join("/");
    return {
      path: to,
      label: routeNameMap[to] || decodeURIComponent(to.split("/").pop())
    };
  });

  const fullCrumbs = [{ path: "/", label: "Home" }, ...breadcrumbs];

  return (
    <nav className="text-sm sm:text-base text-[#1AA39D]  font-poppins" aria-label="breadcrumb">
      <ol className="flex flex-wrap items-center gap-x-2">
        {fullCrumbs.map((item, index) => (
          <li key={item.path} className="flex items-center gap-x-2">
            {index !== 0 && <ChevronRight className="w-4 h-4 text-[#1AA39D]" />}
            {index === fullCrumbs.length - 1 ? (
              <span className="text-[#1AA39D]">{item.label}</span>
            ) : (
              <Link to={item.path} className="text-[#1AA39D] hover:underline">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;

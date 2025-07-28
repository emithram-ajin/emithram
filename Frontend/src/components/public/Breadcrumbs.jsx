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
      label: routeNameMap[to] || to.split("/").pop()
    };
  });

  // Include Home as the first item
  const fullCrumbs = [{ path: "/", label: "Home" }, ...breadcrumbs];

  return (
    <nav className="text-md text-[#1AA39D] my-4 font-poppins font-bold md:ml-25" aria-label="breadcrumb">
      <ol className="flex items-center flex-wrap space-x-2">
        {fullCrumbs.map((item, index) => (
          <div key={item.path} className="flex items-center space-x-2">
            {index !== 0 && <ChevronRight className="w-4 h-4 text-[#1AA39D]" />}
            <li>
              {index === fullCrumbs.length - 1 ? (
                <span className="text-[#1AA39D]">{item.label}</span>
              ) : (
                <Link to={item.path} className="text-[#1AA39D]hover:underline">
                  {item.label}
                </Link>
              )}
            </li>
          </div>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;

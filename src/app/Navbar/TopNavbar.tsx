"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const TopNavbar = () => {
  const pathName = usePathname();
  const router = useRouter();

  return (
    <nav className="bg-gradient-to-r from-gray-100 to-gray-500 shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://static.wixstatic.com/media/8a4e7a_aee93c579e0e451a814bad59864b14a9~mv2.webp/v1/fill/w_140,h_45,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Calfus%20logo.webp"
            className="h-8"
            alt="Calfus Logo"
          />
        </a>

        <div className="hidden w-full md:block md:w-auto">
          <ul className="flex flex-col font-medium md:flex-row md:space-x-8">
            <li onClick={() => router.replace("/Docs")}>
              <a
                className="block py-2 px-3 text-gray-800 hover:cursor-pointer hover:text-white transition-colors duration-200 rounded-md hover:bg-gray-700"
                aria-current="page"
              >
                Docs
              </a>
            </li>
            <li onClick={() => router.replace("/History")}>
              <a
                className="block py-2 px-3 text-gray-800 hover:cursor-pointer hover:text-white transition-colors duration-200 rounded-md hover:bg-gray-700"
                aria-current="page"
              >
                History
              </a>
            </li>
            <li onClick={() => router.replace("/AdaReport")}>
              <a
                className="block py-2 px-3 text-gray-800 hover:cursor-pointer hover:text-white transition-colors duration-200 rounded-md hover:bg-gray-700"
                aria-current="page"
              >
                ADA Reports
              </a>
            </li>
            <li onClick={() => router.replace("/GettingStarted")}>
              <a
                className={`block py-2 px-3 text-gray-800 hover:cursor-pointer hover:text-white transition-colors duration-200 rounded-md hover:bg-gray-700 ${
                  pathName !== "/" && pathName !== "/GettingStarted"
                    ? ""
                    : "hidden"
                }`}
                aria-current="page"
              >
                Back to Home
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;

// "use client";
// import { usePathname, useRouter } from "next/navigation";
// import React from "react";
// import { AppBar, Toolbar, Button, Container, Box } from "@mui/material";

// const TopNavbar = () => {
//   const pathName = usePathname();
//   const router = useRouter();

//   return (
//     <AppBar
//       position="static"
//       className="bg-gradient-to-r from-gray-100 to-gray-500 shadow-md"
//     >
//       <Container maxWidth="xl">
//         <Toolbar disableGutters className="flex justify-between">
//           {/* Logo */}
//           <a
//             href="#"
//             className="flex items-center space-x-3 rtl:space-x-reverse"
//           >
//             <img
//               src="https://static.wixstatic.com/media/8a4e7a_aee93c579e0e451a814bad59864b14a9~mv2.webp/v1/fill/w_140,h_45,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Calfus%20logo.webp"
//               className="h-8"
//               alt="Calfus Logo"
//             />
//           </a>

//           {/* Nav Links */}
//           <Box className="hidden md:flex md:space-x-8">
//             <Button
//               onClick={() => router.replace("/Docs")}
//               className="text-gray-800 hover:text-white hover:bg-gray-700 py-2 px-3 transition-colors duration-200 rounded-md"
//             >
//               Docs
//             </Button>
//             <Button
//               onClick={() => router.replace("/History")}
//               className="text-gray-800 hover:text-white hover:bg-gray-700 py-2 px-3 transition-colors duration-200 rounded-md"
//             >
//               History
//             </Button>
//             <Button
//               onClick={() => router.replace("/AdaReport")}
//               className="text-gray-800 hover:text-white hover:bg-gray-700 py-2 px-3 transition-colors duration-200 rounded-md"
//             >
//               ADA Reports
//             </Button>
//             <Button
//               onClick={() => router.replace("/GettingStarted")}
//               className={`text-gray-800 hover:text-white hover:bg-gray-700 py-2 px-3 transition-colors duration-200 rounded-md ${
//                 pathName !== "/" && pathName !== "/GettingStarted"
//                   ? ""
//                   : "hidden"
//               }`}
//             >
//               Back to Home
//             </Button>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };

// export default TopNavbar;


// "use client";
// import { usePathname, useRouter } from "next/navigation";
// import React from "react";
// import { AppBar, Toolbar, Button, Container, Box } from "@mui/material";

// const TopNavbar = () => {
//   const pathName = usePathname();
//   const router = useRouter();

//   // Navigation handler to wrap router.replace
//   const handleNavigation = (path: string) => {
//     router.replace(path);
//   };

//   return (
//     <AppBar
//       position="static"
//       className="bg-gradient-to-r from-gray-100 to-gray-500 shadow-md"
//     >
//       <Container maxWidth="xl">
//         <Toolbar disableGutters className="flex justify-between">
//           {/* Logo */}
//           <a
//             href="#"
//             className="flex items-center space-x-3 rtl:space-x-reverse"
//           >
//             <img
//               src="https://static.wixstatic.com/media/8a4e7a_aee93c579e0e451a814bad59864b14a9~mv2.webp/v1/fill/w_140,h_45,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Calfus%20logo.webp"
//               className="h-8"
//               alt="Calfus Logo"
//             />
//           </a>

//           {/* Nav Links */}
//           <Box className="hidden md:flex md:space-x-8">
//             <Button
//               onClick={() => handleNavigation("/Docs")}
//               className="text-gray-800 hover:text-white hover:bg-gray-700 py-2 px-3 transition-colors duration-200 rounded-md"
//             >
//               Docs
//             </Button>
//             <Button
//               onClick={() => handleNavigation("/History")}
//               className="text-gray-800 hover:text-white hover:bg-gray-700 py-2 px-3 transition-colors duration-200 rounded-md"
//             >
//               History
//             </Button>
//             <Button
//               onClick={() => handleNavigation("/AdaReport")}
//               className="text-gray-800 hover:text-white hover:bg-gray-700 py-2 px-3 transition-colors duration-200 rounded-md"
//             >
//               ADA Reports
//             </Button>
//             <Button
//               onClick={() => handleNavigation("/GettingStarted")}
//               className={`text-gray-800 hover:text-white hover:bg-gray-700 py-2 px-3 transition-colors duration-200 rounded-md ${
//                 pathName !== "/" && pathName !== "/GettingStarted"
//                   ? ""
//                   : "hidden"
//               }`}
//             >
//               Back to Home
//             </Button>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };

// export default TopNavbar;
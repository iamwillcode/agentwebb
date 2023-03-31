import React from "react";

export default function Logo({classNames, props}: any) {
  return (
    <svg
      width={35}
      height={20}
      viewBox="0 0 35 20"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames}
      {...props}
    >
      <path
        d="M9.77539 3.4043L4.36133 19.9062H0L7.39648 0H10.1719L9.77539 3.4043ZM14.2734 19.9062L8.8457 3.4043L8.4082 0H11.2109L18.6484 19.9062H14.2734ZM14.0273 12.4961V15.709H3.51367V12.4961H14.0273Z"
        className={classNames}
      />
      <path
        d="M16.893 16.748L20.8578 0H23.0727L23.5785 2.78906L19.3539 19.9062H16.975L16.893 16.748ZM27.0648 16.6797L30.3051 0H34.3656L29.9633 19.9062H27.3109L27.0648 16.6797ZM24.3168 0L28.309 16.8164L28.1996 19.9062H25.8207L21.5688 2.77539L22.1156 0H24.3168Z"
        className={classNames}
      />
    </svg>
  );
}



// export default function Home() {
//   return (
//     <div>
//       <h1></h1>
//     </div>
//   );
// }

import { redirect } from "next/navigation";

export default function Home() {
  redirect("/homepage");
  return null;
}


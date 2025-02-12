"use client";
import { logout } from "@/store/auth/authSlice";
import { AppDispatch } from "@/store/store";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import styles from "./page.module.css";
import cup from "@/assets/images/cup.jpg";
import cup2 from "@/assets/images/cup2.jpg";
import Image from "next/image";  
import { useLocale, useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter(); 
  const handleLogout = () => {
    dispatch(logout());
    router.push("/auth");
  };
 
  const t = useTranslations()
  const currentLocale = useLocale()
  
  const changeLanguage = (locale : string) => {
    if(locale !== currentLocale){
      setRequestLocale(locale)
    }
  }
  return (
    <div className={styles.container}>
      {/* <button onClick={handleLogout}>Log out</button> */} 
      <div className={styles.content_box}>
        <p>{t("welcome")}</p>
        <button onClick={()=>changeLanguage('en')}>Change language</button>
        <div className={`${styles.main_content} font-montserrat`}> 
          <h1>Your coffee</h1>
          <h1>Your vibe</h1>
          <h1>Your energy</h1>
        </div>

        <div className={styles.text}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
            libero risus semper habitant arcu eget. Et integer facilisi eget.
          </p>
        </div>

        <button className={styles.button}>Explore</button>
      </div>
      <div>
        <div className={styles.image_box}>
          <Image src={cup} alt="img" className={styles.cup} />
          <Image src={cup2} alt="img" className={styles.cup2} />
        </div>
      </div>
    </div>
  );
}

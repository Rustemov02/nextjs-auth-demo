"use client";
import { logout } from "@/store/auth/authSlice";
import { AppDispatch } from "@/store/store";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import styles from './page.module.css';

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    router.push("/auth");
  };

  return (
    <div className={styles.container}>
      <button onClick={handleLogout}>Log out</button>

      <div className={styles.content_box}>

        <div className={`${styles.main_content} font-montserrat`}>
          <h1>Your coffee</h1>
          <h1>Your vibe</h1>
          <h1>Your energy</h1>
        </div>

        <div className={styles.text}>
          <p>
            Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
            consectetur Lorem ipsum dolor sit amet, consectetur Et integer
            facilisi eget{" "}
          </p>
        </div>

        <button className={styles.button}>Explore</button>
      </div>

      <div className={styles.image_box}>

      </div>
    </div>
  );
}

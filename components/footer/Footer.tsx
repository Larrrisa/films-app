import Link from "next/link";

import { ArrowIcon } from "../icons/ArrowIcon";
import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  XIcon,
  YoutubeIcon,
} from "../icons/social";

import style from "./styles.module.css";
export function Footer() {
  return (
    <footer className={style.footer}>
      <nav className={style.nav}>
        <ul>
          <li className={style.item}>
            <Link href="/films">Films</Link>
            <ArrowIcon />
          </li>
          <li className={style.item}>
            <Link  href="/shows">TV shows</Link>
            <ArrowIcon />
          </li>
          <li className={style.item}>
            <Link  href="/trending">Trending films</Link>
            <ArrowIcon />
          </li>
        </ul>
      </nav>
      <div className={style.social}>
        <span className={style.social_item}>
          <Link  href="#">
            <FacebookIcon />
          </Link>
        </span>
        <span className={style.social_item}>
          <Link  href="#">
            <InstagramIcon />
          </Link>
        </span>
        <span className={style.social_item}>
          <Link  href="#">
            <TikTokIcon />
          </Link>
        </span>
        <span className={style.social_item}>
          <Link  href="#">
            <YoutubeIcon />
          </Link>
        </span>
        <span className={style.social_item}>
          <Link  href="#">
            <XIcon />
          </Link>
        </span>
      </div>
    </footer>
  );
}

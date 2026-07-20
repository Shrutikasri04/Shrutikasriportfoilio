"use client";
 
import { Mail } from "lucide-react";
import { motion, type Variants } from "framer-motion";
 
/**
 * lucide-react (v1.x) no longer ships brand/logo icons (Github, Linkedin,
 * WhatsApp, etc. were removed from the package). Mail is a generic icon and
 * is still exported, so it's used directly. GitHub, LinkedIn and WhatsApp
 * are hand-drawn inline SVGs sized to match lucide's 24x24 grid so every
 * icon in the row reads as one consistent set.
 */
 
type SocialLink = {
  name: string;
  href: string;
  label: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};
 
function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 0.5C5.65 0.5 0.5 5.66 0.5 12.03c0 5.1 3.29 9.42 7.86 10.95.58.11.79-.25.79-.56 0-.28-.01-1.2-.02-2.18-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.77.12 3.06.74.81 1.19 1.83 1.19 3.09 0 4.43-2.7 5.4-5.27 5.69.42.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.68.8.56A11.53 11.53 0 0 0 23.5 12.03C23.5 5.66 18.35 0.5 12 0.5Z" />
    </svg>
  );
}
 
function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z" />
    </svg>
  );
}
 
function WhatsappIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.47 14.38c-.29-.15-1.7-.84-1.97-.93-.26-.1-.46-.15-.65.14-.2.29-.75.93-.92 1.13-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.32-1.43-.86-.76-1.44-1.71-1.6-2-.17-.29-.02-.44.13-.59.13-.13.29-.34.44-.5.15-.17.19-.29.29-.48.1-.2.05-.37-.02-.51-.07-.15-.65-1.57-.9-2.15-.24-.57-.48-.49-.65-.5h-.56c-.19 0-.5.07-.77.36-.26.29-1.01.99-1.01 2.4 0 1.42 1.03 2.79 1.18 2.98.15.19 2.03 3.1 4.92 4.35.69.3 1.22.47 1.64.61.69.22 1.31.19 1.81.11.55-.08 1.7-.7 1.94-1.37.24-.68.24-1.25.17-1.37-.07-.12-.26-.2-.55-.34ZM12.02 22.06h-.01a9.9 9.9 0 0 1-5.06-1.38l-.36-.22-3.76.99 1-3.67-.24-.38a9.94 9.94 0 0 1-1.52-5.3c0-5.5 4.47-9.98 9.96-9.98 2.66 0 5.16 1.04 7.04 2.92a9.9 9.9 0 0 1 2.91 7.05c0 5.5-4.47 9.97-9.96 9.97Zm8.47-18.45A11.82 11.82 0 0 0 12.02 0C5.53 0 .25 5.28.25 11.78c0 2.08.54 4.1 1.58 5.88L.15 24l6.5-1.7a11.7 11.7 0 0 0 5.36 1.36h.01c6.48 0 11.76-5.28 11.76-11.78 0-3.15-1.22-6.11-3.29-8.27Z" />
    </svg>
  );
}
 
const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/Shrutikasri04",
    label: "GitHub",
    Icon: GithubIcon,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/shrutika-sri-s-030a61327/",
    label: "LinkedIn",
    Icon: LinkedinIcon,
  },
  {
    name: "Email",
    href: "mailto:kit28.24bcs160@gmail.com",
    label: "Email",
    Icon: Mail,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/916379901931",
    label: "WhatsApp",
    Icon: WhatsappIcon,
  },
];
 
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};
 
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};
 
export default function Footer() {
  return (
    <motion.footer
      className="relative w-full bg-[#0B0B0B] px-6 pt-16 pb-10 sm:px-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Top divider */}
      <motion.div
        variants={itemVariants}
        className="mx-auto mb-14 h-px w-full max-w-5xl bg-white/[0.12]"
      />
 
      {/* Social icons — always a single row, from mobile up */}
      <motion.div
        variants={containerVariants}
        className="mx-auto flex max-w-3xl flex-nowrap items-start justify-center gap-x-3 sm:gap-x-8 md:gap-x-10"
      >
        {socialLinks.map(({ name, href, label, Icon }) => (
          <motion.a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover={{ y: -4, scale: 1.08 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="group flex shrink-0 flex-col items-center gap-2 sm:gap-3"
          >
            <span
              className="
                flex h-11 w-11 items-center justify-center rounded-full
                border border-white/[0.12] bg-white/[0.04]
                text-white/70 backdrop-blur-md
                transition-all duration-300 ease-out
                sm:h-14 sm:w-14
                md:h-16 md:w-16
                group-hover:border-[#E63946]/70 group-hover:text-white
                group-hover:shadow-[0_0_24px_rgba(230,57,70,0.35)]
              "
            >
              <Icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" strokeWidth={1.75} />
            </span>
            <span
              className="
                font-space-grotesk text-[10px] tracking-wide text-white/40
                transition-colors duration-300 ease-out
                sm:text-xs
                group-hover:text-white/80
              "
            >
              {label}
            </span>
          </motion.a>
        ))}
      </motion.div>
 
      {/* Divider */}
      <motion.div
        variants={itemVariants}
        className="mx-auto my-12 h-px w-full max-w-5xl bg-white/[0.12]"
      />
 
      {/* Credit + copyright */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col items-center gap-2 text-center"
      >
        <p className="font-space-grotesk text-sm text-white/50">
          Carefully Crafted by{" "}
          <span className="text-white/80">@ShrutikaSriS</span>
        </p>
        <p className="font-space-grotesk text-xs tracking-widest text-white/30">
          © 2026 SHRUTIKA SRI S
        </p>
      </motion.div>
    </motion.footer>
  );
}
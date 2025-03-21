const LinkButton = ({ link, title }) => {
  const styles =
    'font-semibold flex items-center gap-4 rounded-xl bg-bluecolor p-2 hover:bg-redcolor hover:text-white text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-base';
  return (
    <a
      href={link}
      target="_blank"
      rel="nofollow noopener noreferrer"
      className={styles}
    >
      <p className="flex w-full items-center justify-center text-center">
        {title}
      </p>
    </a>
  );
};

export default LinkButton;

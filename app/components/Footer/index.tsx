type FooterTypes = {
  siteTitle?: string;
};
export default function Footer({ siteTitle }: FooterTypes) {
  return (
    <footer>
      <h1>{siteTitle}</h1>
    </footer>
  );
}

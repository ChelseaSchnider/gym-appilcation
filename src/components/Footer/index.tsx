import BiggerLogo from "@/assets/HomePageText.png";

export const Footer = () => {
  return (
    <footer className="gym-container bg-primary-100 ">
      <div className="flex flex-col items-center justify-between gap-12 py-12 md:flex-row">
        <div>
          <img alt="logo" src={BiggerLogo} />
        </div>

        <div>
          <h2 className="font-bold">Contact Us</h2>
          <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
          <p>(333)425-6825</p>
        </div>
      </div>

      <div className="my-3 flex flex-row justify-center">
        <p>© Evogym All Rights Reserved.</p>
      </div>
    </footer>
  );
};

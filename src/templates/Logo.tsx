import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const fontStyle = props.xl ? 'font-bold text-5xl' : 'font-bold text-xl';

  return (
    <span className={`text-black inline-flex items-center ${fontStyle}`}>
      {AppConfig.site_name}
    </span>
  );
};

export { Logo };

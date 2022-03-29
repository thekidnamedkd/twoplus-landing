import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
  pos?: boolean;
};

const Logo = (props: ILogoProps) => {
  const fontStyle = props.xl ? 'font-bold text-5xl' : 'font-bold text-xl';
  const top = props.pos ? 'text-tpBlack-base' : 'text-grey-400';

  return (
    <span className={`${top} inline-flex items-center ${fontStyle}`}>
      {AppConfig.site_name}
    </span>
  );
};

export { Logo };

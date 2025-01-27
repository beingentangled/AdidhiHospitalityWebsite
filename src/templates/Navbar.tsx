import AdidhiButton from '@/components/AdidhiButton';
import DownloadButton from '@/components/GooglePlayDownload';
import { CenteredMenu } from '@/features/landing/CenteredMenu';
import { Section } from '@/features/landing/Section';

import { Logo } from './Logo';

export const Navbar = () => {
  // const t = useTranslations('Navbar');

  return (
    <Section className="px-3 py-6">
      <CenteredMenu
        logo={<Logo />}
        // eslint-disable-next-line react/no-children-prop
        children={<div></div>}
        rightMenu={(
          <>
            {/* PRO: Dark mode toggle button */}
            <li data-fade>
              <DownloadButton />
            </li>
            <li className="ml-1 mr-2.5" data-fade>
              <AdidhiButton text="Sign Up" />
            </li>
          </>
        )}
      />
    </Section>
  );
};

import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import AdidhiAppImage from '@/components/AdidhiAppImage';
import AdidhiFAQ from '@/components/AdidhiFAQPage';
import AdidhiFeatures from '@/components/AdidhiFeatures';
import AdidhiFooter from '@/components/AdidhiFooter';
import Testimonials from '@/components/AdidhiTestimonials';
import HotelAndRestaurantJobs from '@/components/HotelAndResturantJobs';
import { Navbar } from '@/templates/Navbar';
import { Sponsors } from '@/templates/Sponsors';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const IndexPage = (props: { params: { locale: string } }) => {
  unstable_setRequestLocale(props.params.locale);

  return (
    <>
      <Navbar />
      <HotelAndRestaurantJobs />
      <Sponsors />
      <AdidhiFeatures />
      <Testimonials />
      <AdidhiFAQ />
      <AdidhiAppImage />
      <AdidhiFooter />
    </>
  );
};

export default IndexPage;

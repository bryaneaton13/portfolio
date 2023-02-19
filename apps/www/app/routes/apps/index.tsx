import { Link } from '@remix-run/react';
import Page from '~/components/Page';
import Title from '~/components/Title';

export default function Index() {
  return (
    <Page>
      <Link to="/apps/counter">
        <Title text="Counter" size="md" />
      </Link>
    </Page>
  );
}

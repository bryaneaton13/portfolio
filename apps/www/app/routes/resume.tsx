import Page from '~/components/Page';
import Title from '~/components/Title';

export default function Resume() {
  return (
    <Page className="pt-4" pageClassName="text-center">
      <a
        href="https://www.linkedin.com/in/bryan-eaton/"
        target="_blank"
        rel="noreferrer"
        className="underline text-blue-400 mt-2"
      >
        <Title text="Connect with me on Linked In" size="md" />
      </a>
    </Page>
  );
}

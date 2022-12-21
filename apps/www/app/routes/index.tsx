import ExtLink from '~/components/ExtLink';
import Page from '~/components/Page';

function List({ links }: { links: { url: string; title: string }[] }) {
  return (
    <ul className="list-disc list-inside text-slate-900 mt-2 mb-10">
      {links.map((l) => (
        <li key={l.url} className="my-1">
          <ExtLink href={l.url}>{l.title}</ExtLink>
        </li>
      ))}
    </ul>
  );
}

export default function Index() {
  return (
    <Page>
      <h3 className="font-bold">Full-stack software engineer · Technical founder · Husband · Father</h3>
      <p className="mt-4">
        I am a co-founder and entrepreneur for multiple technology solutions startups as well as supporting businesses
        in their technology needs. My responsibilities have included development, architecture, infrastructure,
        maintenance, customer support, and sales.
      </p>
      <div className="mt-8" />

      <h2>Profiles</h2>
      <List
        links={[
          { url: 'https://github.com/bryaneaton13', title: 'GitHub' },
          { url: 'https://www.linkedin.com/in/bryan-eaton/', title: 'LinkedIn' },
          { url: 'https://stackblitz.com/@bryaneaton13', title: 'Stackblitz' },
        ]}
      />
      <h2>Co-founder</h2>
      <List
        links={[
          { url: 'https://www.thryve.io/', title: 'Thryve' },
          { url: 'https://www.learn.stitchedstory.com/', title: 'Stitched Story' },
          { url: 'https://www.hrvids.com/', title: 'HR Vids' },
        ]}
      />
      <h2>Contract work</h2>
      <List
        links={[
          { url: 'https://www.zummedia.com/', title: 'Zum Media' },
          { url: 'https://www.wycliffe.org/', title: 'Wycliffe' },
          { url: 'https://www.cru.org/', title: 'Cru' },
          { url: 'https://www.tribl.com/', title: 'Tribl' },
        ]}
      />
    </Page>
  );
}

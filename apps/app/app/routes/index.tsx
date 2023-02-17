import type { ActionFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Form, useActionData, useTransition } from '@remix-run/react';
import { Configs } from 'shared-utils';
import Button from '~/components/Button';
import Page from '~/components/Page';

export const action: ActionFunction = async ({ request }) => {
  const formData = Object.fromEntries(await request.formData());
  if (formData.password === 'RemixRunPassword') {
    return json({ isValid: true });
  }
  return json({ isValid: false, error: 'Sorry, invalid password.' });
};

export default function Index() {
  const data = useActionData();
  const transition = useTransition();
  console.log('data', data);

  if (data?.isValid) {
    return <Page>Content is good to go!</Page>;
  }

  return (
    <Page>
      Please enter the password before continuing
      <Form method="post" className="px-4 mt-10">
        <div className="mb-2"></div>
        <div className="mb-2">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Password"
            defaultValue={Configs.isLocal ? 'RemixRunPassword' : undefined}
          />
        </div>

        {!data?.isValid && data?.error && <div className="text-red-500 py-2 text-sm">{data.error}</div>}
        <Button
          disabled={transition.state === 'submitting'}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {transition.state === 'submitting' ? 'Submitting...' : 'Submit'}
        </Button>
      </Form>
    </Page>
  );
}

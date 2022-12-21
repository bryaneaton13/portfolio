import type { ActionFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Form, Link, useActionData, useTransition } from '@remix-run/react';
import Page from '~/components/Page';
import Button from '~/components/Button';
import { Configs } from '~/utils/configs';
import classNames from 'classnames';

const DefaultValues: { email?: string; name?: string; message?: string } = Configs.isLocal
  ? {
      email: 'bryaneaton13@gmail.com',
      name: 'Bryan E',
      message: 'Hey!!',
    }
  : {};

export const action: ActionFunction = async ({ request }) => {
  const formData = Object.fromEntries(await request.formData());
  if (!formData.email || !formData.message) {
    return json({ isValid: false, error: 'Please enter an email and a message.' });
  }
  // TODO: Do something with a submission
  return json({ isValid: true, data: formData });
};

const CheckMark = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="text-green-600 w-28 h-28"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export function Thanks() {
  return (
    <div className="flex items-center justify-center mt-6">
      <div className="flex flex-col items-center space-y-2">
        <div className="animate-pulse">
          <CheckMark />
        </div>
        <h1 className="text-4xl font-bold">Thank You!</h1>
        <Link to="/" className="underline text-blue-400">
          Home
        </Link>
      </div>
    </div>
  );
}

export default function Contact() {
  const data = useActionData();
  const transition = useTransition();

  if (data?.isValid) {
    return (
      <Page>
        <Thanks />
      </Page>
    );
  }
  return (
    <Page>
      <Form method="post" className="px-4 mt-10">
        <div className="mb-2">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Your email
          </label>
          <input
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="name@gmail.com"
            defaultValue={DefaultValues.email}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Your name
          </label>
          <input
            name="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Your Name"
            defaultValue={DefaultValues.name}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Message<span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Leave a comment..."
            required
            defaultValue={DefaultValues.message}
          ></textarea>
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

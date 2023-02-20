import { useState } from 'react';
import Button from '~/components/Button';
import { useLocalStorage } from '~/utils/hooks';
import { FiDelete } from 'react-icons/fi';
import Input from '~/components/Input';
import PageLoaderClient from '~/components/PageLoaderClient';

type CounterKeys = { lsKey: string; title: string };
export default function Index() {
  const [lsKeys, setLsKeys] = useLocalStorage<CounterKeys[]>('keys', []);

  return (
    <PageLoaderClient
      onMount={() => {
        if (lsKeys.length === 0) {
          setLsKeys([{ lsKey: 'counter1', title: 'Counter1' }]);
        }
      }}
    >
      {lsKeys?.map(({ lsKey, title }) => (
        <CounterRow key={lsKey} lsKey={lsKey} title={title} lsKeys={lsKeys} setLsKeys={setLsKeys} />
      ))}

      <div className="mt-4">
        <Button
          className="bg-stone-700"
          onClick={() => setLsKeys([...lsKeys, { lsKey: `counter${lsKeys.length + 1}`, title: 'Counter' }])}
        >
          Add Counter
        </Button>
      </div>
    </PageLoaderClient>
  );
}

function CounterRow({
  lsKey,
  title,
  lsKeys,
  setLsKeys,
}: {
  lsKey: string;
  title: string;
  lsKeys: CounterKeys[];
  setLsKeys: (value: CounterKeys[]) => void;
}) {
  const [showEdit, setShowEdit] = useState(false);
  return (
    <div className="py-4 border-b-2 border-b-stone-500">
      <div className="mb-4 flex flex-row items-center">
        {showEdit ? (
          <Input
            placeholder="Counter"
            defaultValue={title}
            autoFocus={true}
            onBlur={(e) => {
              setLsKeys(lsKeys.map((k) => (k.lsKey === lsKey ? { ...k, title: e.target.value } : k)));
              setShowEdit(false);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setLsKeys(lsKeys.map((k) => (k.lsKey === lsKey ? { ...k, title: e.currentTarget.value } : k)));
                setShowEdit(false);
              }
            }}
          />
        ) : (
          <div onClick={() => setShowEdit(true)} className="text-xl underline hover:text-blue-500 cursor-pointer">
            {title}
          </div>
        )}
        <Button
          className="bg-red-600 ml-4"
          onClick={() => {
            if (confirm('Are you sure you want to delete this?')) {
              setLsKeys(lsKeys.filter((k) => k.lsKey !== lsKey));
            }
          }}
        >
          <FiDelete />
        </Button>
      </div>
      <Counter lsKey={lsKey} title={title} />
    </div>
  );
}

function Counter({ lsKey, title }: { lsKey: string; title: string }) {
  const [count, setCount] = useLocalStorage(lsKey, 0);
  return (
    <>
      <div className="text-xl mb-4">Count: {count}</div>
      <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
        <Button onClick={() => setCount(count + 5)}>+5</Button>
        <Button onClick={() => setCount(count + 10)}>+10</Button>
        <Button onClick={() => setCount(count + 20)}>+20</Button>
        <Button onClick={() => setCount(count + 25)}>+25</Button>
        <Button onClick={() => setCount(count + 30)}>+30</Button>
        <Button onClick={() => setCount(count + 40)}>+40</Button>
        <Button onClick={() => setCount(count - 5)}>-5</Button>
        <Button onClick={() => setCount(count - 10)}>-10</Button>
      </div>
      {/* <div className="text-xl mt-4 border-b-2 border-stone-500 mb-4">Subtract</div> */}
      <div className="mt-4">
        <Button onClick={() => setCount(0)} className="bg-stone-400">
          Reset Count
        </Button>
      </div>
    </>
  );
}

import Button from '~/components/Button';
import Page from '~/components/Page';
import { useLocalStorage } from '~/utils/hooks';

export default function Index() {
  const [count, setCount] = useLocalStorage('pushups', 0);

  return (
    <Page>
      <div className="text-xl">Current count: {count}</div>

      <div className="text-xl mt-4 border-b-2 border-stone-500 mb-4">Add</div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Button onClick={() => setCount(count + 5)}>+5</Button>
        <Button onClick={() => setCount(count + 10)}>+10</Button>
        <Button onClick={() => setCount(count + 20)}>+20</Button>
        <Button onClick={() => setCount(count + 25)}>+25</Button>
        <Button onClick={() => setCount(count + 30)}>+30</Button>
        <Button onClick={() => setCount(count + 40)}>+40</Button>
      </div>
      <div className="text-xl mt-4 border-b-2 border-stone-500 mb-4">Subtract</div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Button onClick={() => setCount(count - 5)}>-5</Button>
        <Button onClick={() => setCount(count - 10)}>-10</Button>
        <Button onClick={() => setCount(count - 20)}>-20</Button>
        <Button onClick={() => setCount(count - 25)}>-25</Button>
        <Button onClick={() => setCount(count - 30)}>-30</Button>
        <Button onClick={() => setCount(count - 40)}>-40</Button>
      </div>
      <div className="mt-4">
        <Button onClick={() => setCount(0)}>Reset Count</Button>
      </div>
    </Page>
  );
}

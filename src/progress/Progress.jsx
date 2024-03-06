import { useSelector } from 'react-redux';
import { Flex, Progress } from 'antd';

export default function ProgressBar() {
  const count = useSelector((state) => state.tickets.progress);

  return (
    <Flex vertical gap="small" className="progress">
      <Flex vertical gap="small">
        <Progress percent={count} type="line" />
      </Flex>
    </Flex>
  );
}

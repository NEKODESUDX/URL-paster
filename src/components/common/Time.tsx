import { type SvgIconComponent } from '@mui/icons-material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import dayjs, { extend } from 'dayjs';
import dayjsPluginTimezone from 'dayjs/plugin/timezone';
import dayjsPluginUtc from 'dayjs/plugin/utc';
import { type FC } from 'react';

extend(dayjsPluginUtc);
extend(dayjsPluginTimezone);

type TimeProps = Readonly<{
  Icon: SvgIconComponent,
  timestamp: number
}>;

const Time: FC<TimeProps> = ({ Icon, timestamp }) => {
  const time = dayjs.tz(timestamp, 'Asia/Tokyo');

  return (
    <Typography component='div' color='text.secondary' variant='body2'>
      <Stack direction='row' spacing={0.5} alignItems='center'>
        <Icon fontSize='small' />
        <time dateTime={time.toISOString()}>
          {time.format('YYYY/MM/DD HH:mm:ss')}
        </time>
      </Stack>
    </Typography>
  );
};

export default Time;
export { type TimeProps };

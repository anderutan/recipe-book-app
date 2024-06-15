import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import './styles.css';
import { clsx } from 'clsx';
import useWindowDimensions from '@/utils/useWindowDimensions';

interface CheckboxListProps {
  items: string[];
}

export default function CheckboxList({ items }: CheckboxListProps) {
  const { width } = useWindowDimensions();
  const [checked, setChecked] = React.useState<number[]>([]);

  const handleToggle = (index: number) => () => {
    const currentIndex = checked.indexOf(index);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(index);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List
      sx={{
        width: '100%',

        bgcolor: 'background.paper',
      }}
    >
      {items.map((item, index) => {
        const labelId = `checkbox-list-label-${index}`;

        return (
          <ListItem key={index} disablePadding sx={{ padding: '15px' }}>
            <ListItemButton
              role={undefined}
              onClick={handleToggle(index)}
              dense
            >
              <ListItemIcon>
                <Checkbox
                  edge='start'
                  checked={checked.indexOf(index) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText
                id={labelId}
                primary={item}
                className={clsx({
                  'line-through': checked.indexOf(index) !== -1,
                })}
                primaryTypographyProps={{
                  fontSize: width > 640 ? 24 : 20,
                  fontWeight: 500,
                }}
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}

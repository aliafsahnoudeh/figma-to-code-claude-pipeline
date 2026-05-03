import type { Meta, StoryObj } from '@storybook/react';
import { ImageList, ImageListItem } from '@taskflow/components';

const meta = {
  title: 'Components/ImageList',
  component: ImageList,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ImageList>;

export default meta;
type Story = StoryObj<typeof meta>;

const itemData = [
  { img: 'https://picsum.photos/200/200?random=1', title: 'Image 1' },
  { img: 'https://picsum.photos/200/200?random=2', title: 'Image 2' },
  { img: 'https://picsum.photos/200/200?random=3', title: 'Image 3' },
  { img: 'https://picsum.photos/200/200?random=4', title: 'Image 4' },
  { img: 'https://picsum.photos/200/200?random=5', title: 'Image 5' },
  { img: 'https://picsum.photos/200/200?random=6', title: 'Image 6' },
];

export const Standard: Story = {
  render: () => (
    <ImageList cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img src={item.img} alt={item.title} loading="lazy" />
        </ImageListItem>
      ))}
    </ImageList>
  ),
};

export const TwoColumns: Story = {
  render: () => (
    <ImageList cols={2} rowHeight={200}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img src={item.img} alt={item.title} loading="lazy" />
        </ImageListItem>
      ))}
    </ImageList>
  ),
};

import { InfoListItem } from '@/components/InfoList/types';

export const DEFAULT_POST_INFO: InfoListItem[] = [
	{
		color: 'dark',
		children: <><span className='visually-hidden'>Категория: </span>Front-end</>
	},
	{
		children: <><span className='visually-hidden'>Время публикации: </span>1 месяц назад</>
	},
	{
		children: <><span className='visually-hidden'>Время на прочтение: </span>3 минуты</>
	},
	{
		likes: true,
		children: '4'
	}
];
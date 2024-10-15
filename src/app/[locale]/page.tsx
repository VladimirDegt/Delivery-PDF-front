import { DragAndDropActs } from '@/components/DragAndDropActs/DragAndDropActs';
import { BlockChooseActs } from '@/components/BlockChooseActs/BlockChooseActs';
import cls from './page.module.scss';
import { BlockChooseEmailTo } from '@/components/BlockChooseEmailTo/BlockChooseEmailTo';
import { Title } from '@/shared/Title/Title';

export default function HomePage() {
    return (
        <main>
            <Title translationKey='HomePage.title' data-testid='titleHomePage' />
            <div className={cls.container} data-testid='mainHomePage'>
                <div className={cls.container_email}>
                    <BlockChooseEmailTo />
                    <BlockChooseActs />
                </div>
                <DragAndDropActs />
            </div>
        </main>
    );
}
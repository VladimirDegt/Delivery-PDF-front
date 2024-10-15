import { ReportDelivery } from '@/components/ReportDelivery/ReportDelivery';
import { Title } from '@/shared/Title/Title';

export default function ReportPage() {
    return (
        <main data-testid='mainReportPage'>
            <Title translationKey='ReportPage.title' />
            <ReportDelivery />
        </main>
    );
}

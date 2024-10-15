import { toast } from 'react-toastify';

class NotificationManager {
    private static instance: NotificationManager;

    private toastId = 'toastId';

    private BORDER_RADIUS = '20px';
    private TEXT_COLOR = '#ffffff';

    private BACKGROUND_COLOR_ERROR = '#e97e80';
    private BACKGROUND_COLOR_SUCCESS = '#5BAD77';
    private BACKGROUND_COLOR_INFO = '#6377E2';
    private BACKGROUND_COLOR_WARNING = '#E9BC7E';

    private constructor() {}

    public static getInstance(): NotificationManager {
        if (!NotificationManager.instance) {
            NotificationManager.instance = new NotificationManager();
        }
        return NotificationManager.instance;
    }

    showError(message: string) {
        toast.error(message, {
            toastId: this.toastId,
            style: {
                background: this.BACKGROUND_COLOR_ERROR,
                color: this.TEXT_COLOR,
                borderRadius: this.BORDER_RADIUS
            }
        });
    }

    showSuccess(message: string) {
        toast.success(message, {
            toastId: this.toastId,
            style: {
                background: this.BACKGROUND_COLOR_SUCCESS,
                color: this.TEXT_COLOR,
                borderRadius: this.BORDER_RADIUS
            }
        });
    }

    showInfo(message: string) {
        toast.info(message, {
            toastId: this.toastId,
            style: {
                background: this.BACKGROUND_COLOR_INFO,
                color: this.TEXT_COLOR,
                borderRadius: this.BORDER_RADIUS
            }
        });
    }
    showWarning(message: string) {
        toast.warn(message, {
            toastId: this.toastId,
            style: {
                background: this.BACKGROUND_COLOR_WARNING,
                color: this.TEXT_COLOR,
                borderRadius: this.BORDER_RADIUS
            }
        });
    }
}

const notification = NotificationManager.getInstance();
export default notification;

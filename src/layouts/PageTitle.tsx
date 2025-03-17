// utils
import type { PageTitleProps } from '@utils/Models';

export default function PageTitle(props:PageTitleProps) {

    const { title, children } = props;

    const setTitle = title ? `${title} | ` : '';
    document.title = setTitle + process.env.PROJECT_NAME;

    return children;

}
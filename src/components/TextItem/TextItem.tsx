import { TextItemProps } from "./TextItem.types";
import "./TextItem.scss";

export const TextItem = (props: TextItemProps) => {
    const { index, company, title, summary } = props;
    return (
        <div className="text-item-container">
            <p className="text-item-number font-dark-quartenary">
                {`0${index + 1}`}
            </p>
            <h3 className="text-item-company">{company}</h3>
            <div className="text-item-grid font-dark-tertiary">
                <p className="p-justify-left">{title}</p>
                <p>JUN 2021</p>
                <p>--</p>
                <p>AUG 2021</p>
            </div>

            <p className="font-dark-secondary">{summary}</p>
        </div>
    );
};

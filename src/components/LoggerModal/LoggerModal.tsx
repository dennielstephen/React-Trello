import React from "react";
import { useTypedSelector } from "../../hooks/reduxHooks";
import { logItem } from "../../types/types";
import { title, wrapper } from "./LoggerModal.css";
import LogItem from "./LogItem/LogItem";

const LoggerModal: React.FC = () => {
  const logs = useTypedSelector(state => state.logger.logArray);
  return (
    <div className={wrapper}>
      <div className={title}>Log activity</div>
      {logs.map((log, index) => (
        <LogItem key={index} logItem={log} />
      ))}
    </div>
  );
};

export default LoggerModal;
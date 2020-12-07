import React from "react";

interface Props {
  token: string;
}


const TopSearchLayout: React.FC<Props> = ({
  token
}) => {
  return (
    <>
      <div>
        <h1>ログインしました</h1>
        <h2>{ token }</h2>
      </div>
    </>
  )
};

export default TopSearchLayout;
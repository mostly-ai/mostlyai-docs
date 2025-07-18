import React from 'react';

// type ReleaseType = "free-version" | "private" | "on-premises" | "LTS";
type ReleaseType = 'LTS';

const VersionTag: React.FC = ({ releaseType }: { releaseType: ReleaseType }) => {
  const NewTagStyle: React.CSSProperties = {
    // pointerEvents: "none",
    backgroundColor: '#EFF4FF',
    border: 'none',
    color: '#2557D6',
    padding: '0px 15px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    marginLeft: '10px',
    marginBottom: '3px',
    borderRadius: '100px',
    fontSize: '22px',
    fontWeight: 'bold',
    verticalAlign: 'middle',
  };

  return <span style={NewTagStyle}>NEW!</span>;
};

export default VersionTag;

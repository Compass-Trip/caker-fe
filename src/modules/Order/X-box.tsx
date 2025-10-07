const XBox = ({
  width,
  height,
  radius,
  padding,
}: {
  width: number;
  height: number;
  radius: number;
  padding: number;
}) => {
  return (
    <div>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 둥근 사각형 */}
        <rect
          x="0.75"
          y="0.75"
          width={width - 1.5}
          height={height - 1.5}
          rx={radius}
          ry={radius}
          stroke="#A0A0A0"
          strokeWidth="1.5"
          fill="#FAFAFA"
        />

        {/* 대각선 (모서리 안쪽으로 여백 적용) */}
        <line
          x1={padding}
          y1={padding}
          x2={width - padding}
          y2={height - padding}
          stroke="#A0A0A0"
          strokeWidth="1"
        />
        <line
          x1={width - padding}
          y1={padding}
          x2={padding}
          y2={height - padding}
          stroke="#A0A0A0"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
};

export default XBox;

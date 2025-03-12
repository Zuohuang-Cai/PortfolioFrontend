function Photography() {
  return (
    <div className="h-screen w-full relative overflow-hidden">
      <img
        alt="TransparentImage"
        className="absolute left-[50%] top-0 w-full h-full z-[2]"
        src="/left.jpg"
      />

      <img
        alt="defaultImage"
        className="absolute top-0 right-[50%] w-full h-full z-[1]"
        src="/right.jpg"
      />
    </div>
  );
}

export default Photography;

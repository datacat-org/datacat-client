export default function BlurCircles() {
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
      <div className="fixed w-96 h-96 rounded-full mix-blend-multiply filter blur-[100px] opacity-20  left-20 -top-0 bg-red-800" />
      <div className="fixed w-96 h-96 rounded-full mix-blend-multiply filter blur-[70px] opacity-20 right-20 -bottom-0 bg-red-800" />
    </div>
  );
}

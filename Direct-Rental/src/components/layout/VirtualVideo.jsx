const VirtualVideo = () => {
  return(
    <section style={{
        backgroundImage: 'url(/assets/images/bg/video-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',}} className="w-full h-80">
      <div style={{backgroundColor: '#002072b2',}} className="size-full flex flex-col items-center justify-center gap-4">
        <video
          controls
          className="rounded-full w-32 h-32 object-cover shadow-lg"
        >
          <source src="/assets/videos/open-apartment-tour.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="w-80 mx-auto text-white text-2xl font-semibold text-center mb-5">Attend A Virtual Open Apartments</p>
      </div>
    </section>
  );
}

export default VirtualVideo;
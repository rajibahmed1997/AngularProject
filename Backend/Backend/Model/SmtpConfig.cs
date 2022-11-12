namespace Backend.Model
{
    public class SmtpConfig
    {
        public Guid Id { get; set; }
        public string Host { get; set; }
        public string PortNumber { get; set; }
        public string UserEmail { get; set; }
        public string UserPassword { get; set; }
        public string EffectiveFrom { get; set; }
        public string EffectiveTo { get; set; }
        public string SSL { get; set; }
    }
}

// CompTIA A+ Acronyms (Core 1 & 2) data set
const ACRONYMS = [
  {
    "id": 1,
    "acronym": "AAA",
    "expansion": "Authentication, Authorization, and Accounting",
    "definition": "Security framework that controls access by verifying identity (authentication), deciding permissions (authorization), and tracking activity (accounting)."
  },
  {
    "id": 2,
    "acronym": "ACL",
    "expansion": "Access Control List",
    "definition": "A rule list on devices or file systems that allows or denies specific traffic or user actions."
  },
  {
    "id": 3,
    "acronym": "ADF",
    "expansion": "Automatic Document Feeder",
    "definition": "Printer/scanner feeder that automatically pulls multiple pages for scanning or copying."
  },
  {
    "id": 4,
    "acronym": "AES",
    "expansion": "Advanced Encryption Standard",
    "definition": "Widely used symmetric-key encryption standard that protects data at rest and in transit (e.g., WPA2/WPA3)."
  },
  {
    "id": 5,
    "acronym": "AMD",
    "expansion": "Advanced Micro Devices, Inc.",
    "definition": "Hardware maker of PC processors and graphics chips used in desktops and laptops."
  },
  {
    "id": 6,
    "acronym": "AP",
    "expansion": "Access Point",
    "definition": "Wireless access point; bridges Wi-Fi clients to the wired LAN."
  },
  {
    "id": 7,
    "acronym": "APFS",
    "expansion": "Apple File System",
    "definition": "Apple's modern file system with features like snapshots, cloning, and strong encryption."
  },
  {
    "id": 8,
    "acronym": "APIPA",
    "expansion": "Automatic Private Internet Protocol Addressing",
    "definition": "Windows feature that self-assigns a 169.254.x.x address when DHCP is unavailable."
  },
  {
    "id": 9,
    "acronym": "ARM",
    "expansion": "Advanced RISC [Reduced Instruction Set Computer] Machine",
    "definition": "CPU architecture optimized for low power; common in phones, tablets, and some laptops."
  },
  {
    "id": 10,
    "acronym": "ATX",
    "expansion": "Advanced Technology Extended",
    "definition": "Motherboard and power-supply form factor standard that defines size, mounting, and connectors."
  },
  {
    "id": 11,
    "acronym": "AUP",
    "expansion": "Acceptable Use Policy",
    "definition": "Policy that sets rules for acceptable use of an organization's computers, network, and Internet access."
  },
  {
    "id": 12,
    "acronym": "BEC",
    "expansion": "Business Email Compromise",
    "definition": "Social-engineering scam where attackers impersonate executives to trick staff into sending money or data."
  },
  {
    "id": 13,
    "acronym": "BIOS",
    "expansion": "Basic Input/Output System",
    "definition": "Firmware that initializes hardware and starts the boot process on older PCs (superseded by UEFI on newer systems)."
  },
  {
    "id": 14,
    "acronym": "BNC",
    "expansion": "Bayonet Neill-Concelman",
    "definition": "Bayonet-style RF coax connector used on older Ethernet and video equipment."
  },
  {
    "id": 15,
    "acronym": "BSOD",
    "expansion": "Blue Screen of Death",
    "definition": "Windows stop error screen indicating a critical system failure requiring reboot and troubleshooting."
  },
  {
    "id": 16,
    "acronym": "BYOD",
    "expansion": "Bring Your Own Device",
    "definition": "Practice of employees using personal devices for work; requires strong security controls and policy."
  },
  {
    "id": 17,
    "acronym": "CAC",
    "expansion": "Calling-card Authorization Computer",
    "definition": "Common Access Card: a smart ID card providing strong authentication, commonly used in government/DoD environments."
  },
  {
    "id": 18,
    "acronym": "CAS",
    "expansion": "Column Address Strobe",
    "definition": "Signal used by RAM to locate and access a specific column of data. It works with RAS (Row Address Strobe) to identify exact memory locations. CAS latency (CL) is a key performance metric lower is faster."
  },
  {
    "id": 19,
    "acronym": "CIFS",
    "expansion": "Common Internet File System",
    "definition": "File-sharing protocol (early form of SMB) used to access files and printers over a network."
  },
  {
    "id": 20,
    "acronym": "CMDB",
    "expansion": "Configuration Management Database",
    "definition": "Repository that tracks IT assets, configurations, and their relationships to support change/incident management."
  },
  {
    "id": 21,
    "acronym": "CMOS",
    "expansion": "Complementary Metal-Oxide Semiconductor",
    "definition": "Battery-backed chip that stores BIOS/UEFI settings and maintains the real-time clock."
  },
  {
    "id": 22,
    "acronym": "CNAME",
    "expansion": "Canonical Name",
    "definition": "DNS record that creates an alias from one hostname to another (canonical) name."
  },
  {
    "id": 23,
    "acronym": "CPU",
    "expansion": "Central Processing Unit",
    "definition": "The central processor that performs calculations and runs instructions for the system."
  },
  {
    "id": 24,
    "acronym": "DB-9",
    "expansion": "Serial Communications D-Shell Connector, 9 pins",
    "definition": "9-pin D-sub serial connector often used for RS-232 on legacy PCs and network gear."
  },
  {
    "id": 25,
    "acronym": "DDOS",
    "expansion": "Distributed Denial of Service",
    "definition": "Distributed Denial of Service: a technology or concept used in IT; know what it is and when to use it for the A+ exam."
  },
  {
    "id": 26,
    "acronym": "DDR",
    "expansion": "Double Data Rate",
    "definition": "Type of synchronous DRAM that transfers data on both clock edges; used as main system memory."
  },
  {
    "id": 27,
    "acronym": "DHCP",
    "expansion": "Dynamic Host Configuration Protocol",
    "definition": "Service that automatically assigns IP addresses and network settings to clients."
  },
  {
    "id": 28,
    "acronym": "DIMM",
    "expansion": "Dual In-line Memory Module",
    "definition": "Removable memory module that plugs into motherboard slots to add RAM."
  },
  {
    "id": 29,
    "acronym": "DKIM",
    "expansion": "DomainKeys Identified Mail",
    "definition": "Email authentication using cryptographic signatures to verify messages weren't altered and are authorized by the sending domain."
  },
  {
    "id": 30,
    "acronym": "DLP",
    "expansion": "Data Loss Prevention",
    "definition": "Tools and policies that prevent sensitive data from leaving the organization (email, web, storage)."
  },
  {
    "id": 31,
    "acronym": "DMARC",
    "expansion": "Domain-based Message Authentication, Reporting, and Conformance",
    "definition": "Email policy telling receivers how to handle messages failing SPF/DKIM and providing domain-owner reporting."
  },
  {
    "id": 32,
    "acronym": "DNS",
    "expansion": "Domain Name System",
    "definition": "System that translates human-readable domain names into IP addresses."
  },
  {
    "id": 33,
    "acronym": "DOS",
    "expansion": "Denial of Service",
    "definition": "Denial of Service: a technology or concept used in IT; an attack that overwhelms a server, service, or network with a flood of internet traffic from multiple sources."
  },
  {
    "id": 34,
    "acronym": "DRM",
    "expansion": "Digital Rights Management",
    "definition": "Technologies that control how digital content can be accessed, copied, or shared."
  },
  {
    "id": 35,
    "acronym": "DSL",
    "expansion": "Digital Subscriber Line",
    "definition": "Internet service that uses telephone lines to provide broadband connectivity."
  },
  {
    "id": 36,
    "acronym": "DVI",
    "expansion": "Digital Visual Interface",
    "definition": "Digital video interface standard for connecting computers to monitors."
  },
  {
    "id": 37,
    "acronym": "ECC",
    "expansion": "Error-correcting Code",
    "definition": "Error-correcting Code memory that adds extra bits so the system can detect and correct single-bit errors, used for higher reliability (often in servers)."
  },
  {
    "id": 38,
    "acronym": "EDR",
    "expansion": "Endpoint Detection and Response",
    "definition": "Endpoint Detection and Response security that continuously monitors endpoint activity, detects suspicious behavior, and helps contain or remediate threats."
  },
  {
    "id": 39,
    "acronym": "EFS",
    "expansion": "Encrypting File System",
    "definition": "Encrypting File System, a Windows feature that encrypts files/folders on NTFS volumes so only authorized users can read them."
  },
  {
    "id": 40,
    "acronym": "EOL",
    "expansion": "End-of-life",
    "definition": "End-of-Life, when a vendor stops updates and support for a product; using EOL gear increases security and reliability risk."
  },
  {
    "id": 41,
    "acronym": "eSATA",
    "expansion": "External Serial Advanced Technology Attachment",
    "definition": "External Serial ATA, an external connector for SATA storage that provides fast, direct-attach disk performance (largely replaced by USB 3.x/USB-C)."
  },
  {
    "id": 42,
    "acronym": "ESD",
    "expansion": "Electrostatic Discharge",
    "definition": "Electrostatic Discharge, static electricity that can damage components; controlled with wrist straps, mats, and proper handling."
  },
  {
    "id": 43,
    "acronym": "eSIM",
    "expansion": "Embedded Subscriber Identity Module",
    "definition": "Built-in digital SIM inside a mobile device that allows you to activate cellular service without inserting a physical SIM card. Common in newer smartphones and IoT devices"
  },
  {
    "id": 44,
    "acronym": "EULA",
    "expansion": "End-user License Agreement",
    "definition": "End-User License Agreement, the legal terms that define how you may install and use software."
  },
  {
    "id": 45,
    "acronym": "exFAT",
    "expansion": "Extended File Allocation Table",
    "definition": "Extended File Allocation Table, a Microsoft file system optimized for flash drives; supports very large files and is widely compatible across OSes."
  },
  {
    "id": 46,
    "acronym": "FaaS",
    "expansion": "Function as a Service",
    "definition": "Cloud computing model where developers run code in response to events without managing servers. Examples include serverless platforms like AWS Lambda, Azure Functions. You only pay when the function runs."
  },
  {
    "id": 47,
    "acronym": "FAT32",
    "expansion": "32-bit File Allocation Table",
    "definition": "32-bit File Allocation Table, an older, very compatible file system for removable media; limited to 4 GB per file and 2 TB volumes."
  },
  {
    "id": 48,
    "acronym": "FRT",
    "expansion": "Facial Recognition Technology",
    "definition": "Facial Recognition Technology, biometric tech that identifies or verifies a person using their face (used for device unlock and access control)."
  },
  {
    "id": 49,
    "acronym": "FTP",
    "expansion": "File Transfer Protocol",
    "definition": "File Transfer Protocol, legacy file transfer protocol (TCP/21) that sends data in clear text; prefer SFTP/FTPS for security."
  },
  {
    "id": 50,
    "acronym": "GFS",
    "expansion": "Grandfather-Father-Son",
    "definition": "Grandfather-Father-Son, a backup rotation scheme using daily (son), weekly (father), and monthly (grandfather) backup sets."
  },
  {
    "id": 51,
    "acronym": "GPS",
    "expansion": "Global Positioning System",
    "definition": "Global Positioning System, satellite-based navigation and time source used for location services and accurate timekeeping."
  },
  {
    "id": 52,
    "acronym": "GPT",
    "expansion": "GUID [Globally Unique Identifier] Partition Table",
    "definition": "GUID Partition Table, modern disk partitioning standard that supports >2 TB drives and many partitions; required by UEFI systems."
  },
  {
    "id": 53,
    "acronym": "GPU",
    "expansion": "Graphics Processing Unit",
    "definition": "Graphics Processing Unit, processor specialized for rendering graphics and accelerating parallel workloads (e.g., video, AI)."
  },
  {
    "id": 54,
    "acronym": "GUI",
    "expansion": "Graphical User Interface",
    "definition": "User interface that allows interaction with a device using visual elements like windows, icons, buttons, and menus instead of text commands. Examples include Windows and macOS desktops."
  },
  {
    "id": 55,
    "acronym": "GUID",
    "expansion": "Globally Unique Identifier",
    "definition": "Globally Unique Identifier, a 128-bit value used to uniquely identify objects (files, partitions, software components) across systems."
  },
  {
    "id": 56,
    "acronym": "HD",
    "expansion": "High Definition",
    "definition": "High Definition, video/display resolution such as 720p/1080p that provides sharper images than standard definition."
  },
  {
    "id": 57,
    "acronym": "HDD",
    "expansion": "Hard Disk Drive",
    "definition": "Hard Disk Drive, magnetic spinning-platter storage offering large capacity at low cost but slower than SSDs and more shock-sensitive."
  },
  {
    "id": 58,
    "acronym": "HDMI",
    "expansion": "High-definition Media Interface",
    "definition": "High-Definition Multimedia Interface, digital audio/video interface for displays and TVs; carries video and multi-channel audio over one cable."
  },
  {
    "id": 59,
    "acronym": "HSM",
    "expansion": "Hardware Security Module",
    "definition": "Hardware Security Module, tamper-resistant device that generates, stores, and uses cryptographic keys securely."
  },
  {
    "id": 60,
    "acronym": "HTTP",
    "expansion": "Hypertext Transfer Protocol",
    "definition": "Hypertext Transfer Protocol, the basic web protocol (TCP/80) used for transferring web pages and APIs without encryption."
  },
  {
    "id": 61,
    "acronym": "HTTPS",
    "expansion": "Hypertext Transfer Protocol Secure",
    "definition": "HTTP Secure, HTTP over TLS/SSL (TCP/443) that encrypts and authenticates web traffic to protect data in transit."
  },
  {
    "id": 62,
    "acronym": "IaaS",
    "expansion": "Infrastructure as a Service",
    "definition": "Infrastructure as a Service, cloud model providing virtual machines, storage, and networking so you don't manage physical hardware."
  },
  {
    "id": 63,
    "acronym": "IAM",
    "expansion": "Identity and Access Management",
    "definition": "Identity and Access Management, policies and tools to authenticate users and control what resources they can access."
  },
  {
    "id": 64,
    "acronym": "IMAP",
    "expansion": "Internet Mail Access Protocol",
    "definition": "Internet Message Access Protocol, email protocol (TCP/143; SSL/TLS 993) that keeps mail on the server and syncs across devices."
  },
  {
    "id": 65,
    "acronym": "IOPS",
    "expansion": "Input/Output Operations Per Second",
    "definition": "Input/Output Operations Per Second, storage performance metric indicating how many reads/writes a device can handle each second."
  },
  {
    "id": 66,
    "acronym": "IoT",
    "expansion": "Internet of Things",
    "definition": "Internet of Things, networked devices (sensors, appliances, cameras) that collect and exchange data; often require strong security."
  },
  {
    "id": 67,
    "acronym": "IP",
    "expansion": "Internet Protocol",
    "definition": "Internet Protocol, the addressing and routing system (IPv4/IPv6) that delivers packets across networks."
  },
  {
    "id": 68,
    "acronym": "IPS",
    "expansion": "In-plane Switching",
    "definition": "In-Plane Switching, LCD display panel technology known for better color accuracy and wide viewing angles compared to TN/VA."
  },
  {
    "id": 69,
    "acronym": "IR",
    "expansion": "Infrared",
    "definition": "Infrared, short-range, light-based wireless communication used in remote controls and some proximity sensors."
  },
  {
    "id": 70,
    "acronym": "ISO",
    "expansion": "International Organization for Standardization",
    "definition": "International Organization for Standardization, develops global standards; in IT you'll also see \"ISO image,\" a single-file copy of an optical disc."
  },
  {
    "id": 71,
    "acronym": "ISP",
    "expansion": "Internet Service Provider",
    "definition": "Company that provides internet access to users. Examples include Comcast, AT&T, and Spectrum. They connect your home or business network to the internet."
  },
  {
    "id": 72,
    "acronym": "ITX",
    "expansion": "Information Technology eXtended",
    "definition": "Information Technology eXtended, small motherboard form-factor family (e.g., Mini-ITX) used in compact PC builds."
  },
  {
    "id": 73,
    "acronym": "KVM",
    "expansion": "Keyboard-Video-Mouse",
    "definition": "A hardware switch or device that lets you control multiple computers using a single keyboard, video display, and mouse."
  },
  {
    "id": 74,
    "acronym": "LAN",
    "expansion": "Local Area Network",
    "definition": "A local network that connects computers and devices within a small area (home, office, school) for sharing data and resources."
  },
  {
    "id": 75,
    "acronym": "LC",
    "expansion": "Lucent Connector",
    "definition": "A small form-factor fiber-optic connector that uses a latch; common for high-density network patch panels."
  },
  {
    "id": 76,
    "acronym": "LCD",
    "expansion": "Liquid Crystal Display",
    "definition": "Flat-panel display technology that uses liquid crystals and a backlight; common in monitors and laptops."
  },
  {
    "id": 77,
    "acronym": "LDAP",
    "expansion": "Lightweight Directory Access Protocol",
    "definition": "A network protocol for querying and managing directory services (users, groups, permissions) such as Active Directory."
  },
  {
    "id": 78,
    "acronym": "LED",
    "expansion": "Light-emitting Diode",
    "definition": "Light-emitting diode technology used for indicator lights and as a backlight or pixel source in modern displays."
  },
  {
    "id": 79,
    "acronym": "LTE",
    "expansion": "Long-Term Evolution",
    "definition": "A 4G cellular data standard that provides high-speed wireless Internet over mobile networks."
  },
  {
    "id": 80,
    "acronym": "MAC",
    "expansion": "Media Access Control",
    "definition": "A unique hardware address assigned to a network interface used for Layer 2 communication on a LAN."
  },
  {
    "id": 81,
    "acronym": "MAN",
    "expansion": "Metropolitan Area Network",
    "definition": "A network that spans a city or campus area, larger than a LAN but smaller than a WAN."
  },
  {
    "id": 82,
    "acronym": "MBR",
    "expansion": "Master Boot Record",
    "definition": "Legacy disk partitioning and boot sector format used by BIOS systems; stores the bootloader and partition table."
  },
  {
    "id": 83,
    "acronym": "MDM",
    "expansion": "Mobile Device Management",
    "definition": "Software suite that centrally manages and secures mobile devices (enforce passcodes, push configs, remote wipe)."
  },
  {
    "id": 84,
    "acronym": "MDR",
    "expansion": "Managed Detection and Response",
    "definition": "A managed security service that provides continuous threat monitoring, detection, and response by a provider."
  },
  {
    "id": 85,
    "acronym": "MFA",
    "expansion": "Multifactor Authentication",
    "definition": "An authentication method requiring two or more verification factors (e.g., password + app code or token)."
  },
  {
    "id": 86,
    "acronym": "MFP",
    "expansion": "Multifunction Printer",
    "definition": "A multi-function printer that combines printing, scanning, copying, and often faxing in one device."
  },
  {
    "id": 87,
    "acronym": "MMC",
    "expansion": "Microsoft Management Console",
    "definition": "Microsoft Management Console, Windows framework that hosts administrative snap-ins (e.g., Device Manager)."
  },
  {
    "id": 88,
    "acronym": "MNDA",
    "expansion": "Mutual Non-disclosure Agreement",
    "definition": "Mutual Non-Disclosure Agreement, both parties agree to keep shared confidential information private."
  },
  {
    "id": 89,
    "acronym": "mSATA",
    "expansion": "Mini-serial Advanced Technology Attachment",
    "definition": "A compact SATA-based SSD form factor used in small devices and older laptops; connects via SATA interface."
  },
  {
    "id": 90,
    "acronym": "MSDS",
    "expansion": "Material Safety Data Sheet",
    "definition": "Material Safety Data Sheet (now SDS), explains hazards and safe handling of chemicals like toner or cleaners."
  },
  {
    "id": 91,
    "acronym": "MX",
    "expansion": "Mail Exchange",
    "definition": "A DNS record type that specifies which mail servers accept email for a domain."
  },
  {
    "id": 92,
    "acronym": "NAC",
    "expansion": "Network Access Control",
    "definition": "Network Access Control, checks a device's security posture and controls whether it can join the network."
  },
  {
    "id": 93,
    "acronym": "NAS",
    "expansion": "Network Attached Storage",
    "definition": "Dedicated storage device connected to a network that allows multiple users/devices to store and access files centrally. Common in homes and businesses for file sharing and backups"
  },
  {
    "id": 94,
    "acronym": "NAT",
    "expansion": "Network Address Translation",
    "definition": "Method used by routers to translate private IP addresses into a public IP address so devices on a local network can access the internet. Helps conserve IP addresses and adds a layer of security"
  },
  {
    "id": 95,
    "acronym": "NDA",
    "expansion": "Non-disclosure Agreement",
    "definition": "Non-Disclosure Agreement, a legal contract to keep specified information confidential."
  },
  {
    "id": 96,
    "acronym": "NetBIOS",
    "expansion": "Network Basic Input/Output System",
    "definition": "Legacy Windows networking API/protocol suite for name services and sessions within a LAN."
  },
  {
    "id": 97,
    "acronym": "NFC",
    "expansion": "Near-field Communication",
    "definition": "Near Field Communication, very short-range wireless used for tap-to-pay, pairing, and badge access."
  },
  {
    "id": 98,
    "acronym": "NIC",
    "expansion": "Network Interface Card",
    "definition": "Network Interface Card/Controller, the hardware that connects a computer to a network (wired or wireless)."
  },
  {
    "id": 99,
    "acronym": "NTFS",
    "expansion": "New Technology File System",
    "definition": "Windows file system that supports permissions, encryption, compression, quotas, and large volumes."
  },
  {
    "id": 100,
    "acronym": "NTP",
    "expansion": "Network Time Protocol",
    "definition": "Network Time Protocol, keeps computer clocks synchronized over a network."
  },
  {
    "id": 101,
    "acronym": "NVMe",
    "expansion": "Non-volatile Memory Express",
    "definition": "High-performance storage protocol for SSDs that uses PCIe lanes for very fast reads/writes."
  },
  {
    "id": 102,
    "acronym": "OEM",
    "expansion": "Original Equipment Manufacturer",
    "definition": "Company that produces hardware or software that is sold under another company's brand. In IT, OEM licenses are tied to specific hardware (like Windows preinstalled on a PC)."
  },
  {
    "id": 103,
    "acronym": "OLED",
    "expansion": "Organic Light-emitting Diode",
    "definition": "Display tech where each pixel emits its own light; offers deep blacks and high contrast."
  },
  {
    "id": 104,
    "acronym": "ONT",
    "expansion": "Optical Network Termina",
    "definition": "Optical Network Terminal, carrier device that converts fiber signals to Ethernet at the customer premises."
  },
  {
    "id": 105,
    "acronym": "OS",
    "expansion": "Operating System",
    "definition": "Operating System, software that manages hardware and provides services for applications (e.g., Windows, Linux)."
  },
  {
    "id": 106,
    "acronym": "OTP",
    "expansion": "One-time Password (or Passcode)",
    "definition": "One-Time Password, single-use code (often via app or SMS) used to verify identity during login."
  },
  {
    "id": 107,
    "acronym": "PaaS",
    "expansion": "Platform as a Service",
    "definition": "Platform as a Service, cloud service that provides runtime, databases, and tools so you deploy apps without managing servers."
  },
  {
    "id": 108,
    "acronym": "PAM",
    "expansion": "Privileged Access Management",
    "definition": "Privileged Access Management, controls, monitors, and secures use of administrative or high-risk accounts."
  },
  {
    "id": 109,
    "acronym": "PAN",
    "expansion": "Personal Area Network",
    "definition": "Personal Area Network, short-range network for personal devices like phones, headsets, and wearables."
  },
  {
    "id": 110,
    "acronym": "PC",
    "expansion": "Personal Computer",
    "definition": "Personal Computer, a general-purpose computing device for a single user."
  },
  {
    "id": 111,
    "acronym": "PCI",
    "expansion": "Peripheral Component Interconnect",
    "definition": "Peripheral Component Interconnect, older expansion bus used for add-in cards inside PCs."
  },
  {
    "id": 112,
    "acronym": "PCIe",
    "expansion": "Peripheral Component Interconnect Express",
    "definition": "Peripheral Component Interconnect Express, modern high-speed serial bus used for GPUs, NVMe SSDs, and other cards."
  },
  {
    "id": 113,
    "acronym": "PCL",
    "expansion": "Printer Command Language",
    "definition": "Printer Command Language, page description language (from HP) widely supported by printers."
  },
  {
    "id": 114,
    "acronym": "PII",
    "expansion": "Personally Identifiable Information",
    "definition": "Personally Identifiable Information, data that can identify a person (e.g., name + SSN, address, DOB)."
  },
  {
    "id": 115,
    "acronym": "PIN",
    "expansion": "Personal Identification Number",
    "definition": "Personal Identification Number, a short numeric code used to authenticate a user."
  },
  {
    "id": 116,
    "acronym": "PIV",
    "expansion": "Personal Identity Verification",
    "definition": "Personal Identity Verification, U.S. federal smart card standard that stores certificates for authentication."
  },
  {
    "id": 117,
    "acronym": "PoE",
    "expansion": "Power over Ethernet",
    "definition": "Power over Ethernet, supplies electrical power and data over the same Ethernet cable to devices like APs and cameras."
  },
  {
    "id": 118,
    "acronym": "POP",
    "expansion": "Post Office Protocol",
    "definition": "Post Office Protocol (POP3), email retrieval protocol that typically downloads messages to the client."
  },
  {
    "id": 119,
    "acronym": "POST",
    "expansion": "Power-on Self-test",
    "definition": "Power-On Self-Test, firmware diagnostics that check hardware components during system startup."
  },
  {
    "id": 120,
    "acronym": "PSU",
    "expansion": "Power Supply Unit",
    "definition": "Power Supply Unit, converts AC wall power to regulated DC voltages for PC components."
  },
  {
    "id": 121,
    "acronym": "PUP",
    "expansion": "Potentially Unwanted Program",
    "definition": "Potentially Unwanted Program, software that a user didn't intend to install; often adware or bundled tools."
  },
  {
    "id": 122,
    "acronym": "PXE",
    "expansion": "Preboot eXecution Environment",
    "definition": "Preboot eXecution Environment, boots a computer from the network to deploy images or run installers."
  },
  {
    "id": 123,
    "acronym": "QoS",
    "expansion": "Quality of Service",
    "definition": "Quality of Service, manages and prioritizes network traffic to improve performance for critical applications (e.g., VoIP/video)."
  },
  {
    "id": 124,
    "acronym": "RADIUS",
    "expansion": "Remote Authentication Dial-in User Server",
    "definition": "Remote Authentication Dial-in User Service, centralized AAA (authentication, authorization, accounting) for network logins and Wi-Fi/VPN access."
  },
  {
    "id": 125,
    "acronym": "RAID",
    "expansion": "Redundant Array of Independent Disks",
    "definition": "Redundant Array of Independent Disks, combines multiple drives to improve speed and/or provide fault tolerance depending on RAID level."
  },
  {
    "id": 126,
    "acronym": "RAM",
    "expansion": "Random-access Memory",
    "definition": "Random Access Memory, short-term working memory that stores active programs and data for quick CPU access; cleared when power is off."
  },
  {
    "id": 127,
    "acronym": "RDP",
    "expansion": "Remote Desktop Protocol",
    "definition": "Remote Desktop Protocol, allows a user to remotely log in to and control a Windows computer over the network."
  },
  {
    "id": 128,
    "acronym": "ReFS",
    "expansion": "Resilient File System",
    "definition": "Resilient File System, Microsoft file system with data integrity features, large volume support, and automatic corruption repair."
  },
  {
    "id": 129,
    "acronym": "RFID",
    "expansion": "Radio-frequency Identification",
    "definition": "Radio-Frequency Identification, uses radio waves and tags to identify and track items (badges, inventory) without a line of sight."
  },
  {
    "id": 130,
    "acronym": "RGB",
    "expansion": "Red-Green-Blue",
    "definition": "Red-Green-Blue, additive color model used by displays and LEDs to create colors by mixing red, green, and blue light."
  },
  {
    "id": 131,
    "acronym": "RISC",
    "expansion": "Reduced Instruction Set Computer",
    "definition": "Reduced Instruction Set Computer, CPU architecture using a small set of simple instructions for efficient, high-speed processing used in smartphones, tablets, smartwatches, and embedded systems."
  },
  {
    "id": 132,
    "acronym": "RJ11",
    "expansion": "Registered Jack Function 11",
    "definition": "Registered Jack 11, 4P2C/6P2C modular connector commonly used for telephone lines."
  },
  {
    "id": 133,
    "acronym": "RJ45",
    "expansion": "Registered Jack Function 45",
    "definition": "Registered Jack 45, 8P8C modular connector typically used for Ethernet network cabling."
  },
  {
    "id": 134,
    "acronym": "RMM",
    "expansion": "Remote Monitoring and Management",
    "definition": "Software used by IT administrators or Managed Service Providers (MSPs) to remotely monitor, maintain, and manage clients' computers, servers, and networks."
  },
  {
    "id": 135,
    "acronym": "RPM",
    "expansion": "Revolutions Per Minute",
    "definition": "A measurement of rotational speed that indicates how many full turns a mechanical device (like a hard drive spindle or cooling fan) makes each minute."
  },
  {
    "id": 136,
    "acronym": "RSR",
    "expansion": "Rapid Security Response",
    "definition": "An urgent security update, typically released outside normal patch cycles, to fix newly discovered vulnerabilities or active threats quickly."
  },
  {
    "id": 137,
    "acronym": "SaaS",
    "expansion": "Software as a Service",
    "definition": "A cloud-computing model where applications are hosted online and accessed through a browser rather than installed locally (examples: Microsoft 365, Google Workspace)."
  },
  {
    "id": 138,
    "acronym": "SAML",
    "expansion": "Security Assertions Markup Language",
    "definition": "An open standard that enables secure exchange of authentication and authorization data between identity providers and service providers, supporting single sign-on (SSO)."
  },
  {
    "id": 139,
    "acronym": "SAN",
    "expansion": "Storage Area Network",
    "definition": "Storage Area Network, dedicated high-speed network that provides block-level storage to servers."
  },
  {
    "id": 140,
    "acronym": "SAS",
    "expansion": "Serial Attached SCSI [Small Computer System Interface]",
    "definition": "Serial Attached SCSI, point-to-point serial protocol for connecting enterprise HDDs/SSDs with high throughput and reliability."
  },
  {
    "id": 141,
    "acronym": "SATA",
    "expansion": "Serial Advanced Technology Attachment",
    "definition": "Serial ATA, interface for connecting HDDs/SSDs/ODDs to the motherboard; supports hot-swap and high-speed transfers."
  },
  {
    "id": 142,
    "acronym": "SC",
    "expansion": "Subscriber Connector",
    "definition": "Subscriber Connector, push-pull fiber-optic connector with a square body; common in enterprise fiber runs."
  },
  {
    "id": 143,
    "acronym": "SCADA",
    "expansion": "Supervisory Control and Data Acquisition",
    "definition": "A system used to monitor and control industrial processes such as utilities, manufacturing, and energy infrastructure."
  },
  {
    "id": 144,
    "acronym": "SCSI",
    "expansion": "Small Computer System Interface",
    "definition": "Small Computer System Interface, standard for connecting and transferring data between computers and peripherals (legacy/enterprise)."
  },
  {
    "id": 145,
    "acronym": "SD",
    "expansion": "Secure Digital",
    "definition": "Secure Digital, family of removable flash memory cards used in cameras, phones, and IoT devices."
  },
  {
    "id": 146,
    "acronym": "SDS",
    "expansion": "Software Defined Storage",
    "definition": "Storage architecture where storage resources are managed and controlled by software rather than hardware. It allows flexibility, scalability, and centralized management in cloud and data center environments."
  },
  {
    "id": 147,
    "acronym": "SFTP",
    "expansion": "Secure File Transfer Protocol",
    "definition": "SSH File Transfer Protocol, secure file transfer protocol that runs over SSH for encrypted uploads/downloads."
  },
  {
    "id": 148,
    "acronym": "SIM",
    "expansion": "Subscriber Identity Module",
    "definition": "Subscriber Identity Module, smart card in mobile devices that stores carrier identity and network credentials."
  },
  {
    "id": 149,
    "acronym": "SLA",
    "expansion": "Service-level Agreement",
    "definition": "A formal contract between a service provider and customer that defines performance expectations, uptime guarantees, and response times."
  },
  {
    "id": 150,
    "acronym": "S.M.A.R.T",
    "expansion": "Self-monitoring Analysis and Reporting Technology",
    "definition": "A monitoring system built into hard drives and SSDs that detects and reports on drive health to predict potential failures."
  },
  {
    "id": 151,
    "acronym": "SMB",
    "expansion": "Server Message Block",
    "definition": "Server Message Block, protocol for Windows file/print sharing and network resource access."
  },
  {
    "id": 152,
    "acronym": "SMS",
    "expansion": "Short Message Service",
    "definition": "Standard text-messaging technology used to send and receive short messages on mobile phones."
  },
  {
    "id": 153,
    "acronym": "SMTP",
    "expansion": "Simple Mail Transfer Protocol",
    "definition": "Simple Mail Transfer Protocol, protocol used to send outbound email from clients/servers."
  },
  {
    "id": 154,
    "acronym": "SNMP",
    "expansion": "Simple Network Management Protocol",
    "definition": "Protocol used to monitor and manage network devices (routers, switches, servers). It collects data like performance metrics, errors, and device status."
  },
  {
    "id": 155,
    "acronym": "SODIMM",
    "expansion": "Small Outline Dual In-line Memory Module",
    "definition": "A compact type of RAM module used mainly in laptops, small-form-factor PCs, and some all-in-one systems."
  },
  {
    "id": 156,
    "acronym": "SOHO",
    "expansion": "Small Office/Home Office",
    "definition": "Small Office/Home Office, refers to small-scale business/home networks and equipment."
  },
  {
    "id": 157,
    "acronym": "SOP",
    "expansion": "Standard Operating Procedure",
    "definition": "A documented set of step-by-step instructions that outlines how to perform routine tasks consistently and safely within an organization."
  },
  {
    "id": 158,
    "acronym": "SPF",
    "expansion": "Sender Policy Framework",
    "definition": "Sender Policy Framework, DNS-based email authentication to verify which mail servers can send for a domain; helps stop spoofing."
  },
  {
    "id": 159,
    "acronym": "SPICE",
    "expansion": "Software Process Improvement and Capability Determination (1201)",
    "definition": "A framework (ISO/IEC 15504) used to assess and improve software development processes within organizations."
  },
  {
    "id": 160,
    "acronym": "SPICE",
    "expansion": "Simple Protocol for Independent Computing Environments (1202)",
    "definition": "A remote-display protocol that delivers virtual desktops and applications from servers to client devices, commonly used with virtualization platforms like KVM."
  },
  {
    "id": 161,
    "acronym": "SQL",
    "expansion": "Structured Query Language",
    "definition": "Structured Query Language, language to create, read, update, and delete data in relational databases."
  },
  {
    "id": 162,
    "acronym": "SSD",
    "expansion": "Solid-state Drive",
    "definition": "Solid-State Drive, flash-based storage with fast read/write speeds and no moving parts."
  },
  {
    "id": 163,
    "acronym": "SSH",
    "expansion": "Secure Shell",
    "definition": "Secure Shell, encrypted remote login and command execution protocol for administering systems."
  },
  {
    "id": 164,
    "acronym": "SSID",
    "expansion": "Service Set Identifier",
    "definition": "Service Set Identifier, the broadcast name of a Wi-Fi network that clients see when connecting."
  },
  {
    "id": 165,
    "acronym": "SSO",
    "expansion": "Single Sign-on",
    "definition": "Single Sign-On, lets a user authenticate once to access multiple apps/services without re-entering credentials."
  },
  {
    "id": 166,
    "acronym": "ST",
    "expansion": "Straight Tip",
    "definition": "Straight Tip, bayonet-style fiber-optic connector commonly used in older networks and instrumentation."
  },
  {
    "id": 167,
    "acronym": "TACACS",
    "expansion": "Terminal Access Controller Access-control System",
    "definition": "A protocol used to provide centralized authentication, authorization, and accounting for users accessing network devices."
  },
  {
    "id": 168,
    "acronym": "TCP",
    "expansion": "Transmission Control Protocol",
    "definition": "A core protocol in the Internet Protocol Suite that ensures reliable, ordered, and error-checked delivery of data between applications."
  },
  {
    "id": 169,
    "acronym": "TKIP",
    "expansion": "Temporal Key Integrity Protocol",
    "definition": "An older Wi-Fi encryption protocol used with WPA that dynamically changes encryption keys to improve wireless security."
  },
  {
    "id": 170,
    "acronym": "TN",
    "expansion": "Twisted Nematic",
    "definition": "A type of LCD panel technology known for fast response times, commonly used in monitors and displays."
  },
  {
    "id": 171,
    "acronym": "TOTP",
    "expansion": "Time-based One-time Password",
    "definition": "A temporary, time-based password used for multi-factor authentication; it changes every set number of seconds."
  },
  {
    "id": 172,
    "acronym": "TPM",
    "expansion": "Trusted Platform Module",
    "definition": "A tamper-resistant chip on the motherboard that securely stores crypto keys and measures boot integrity (used for BitLocker, secure boot, and device attestation)."
  },
  {
    "id": 173,
    "acronym": "TXT",
    "expansion": "Text",
    "definition": "Plain-text file format/extension with no special formatting. Also in DNS, a TXT record stores arbitrary text like SPF/DMARC data."
  },
  {
    "id": 174,
    "acronym": "UAC",
    "expansion": "User Account Control",
    "definition": "Windows feature that prompts before allowing administrative actions, reducing the risk of malware or accidental system changes."
  },
  {
    "id": 175,
    "acronym": "UDP",
    "expansion": "User Datagram Protocol",
    "definition": "A transport layer protocol that sends data without connection setup or delivery guarantees, used for streaming and gaming."
  },
  {
    "id": 176,
    "acronym": "UEFI",
    "expansion": "Unified Extensible Firmware Interface",
    "definition": "Modern PC firmware that initializes hardware and boots the OS; supports larger disks, faster boot, Secure Boot, and a graphical setup."
  },
  {
    "id": 177,
    "acronym": "UPnP",
    "expansion": "Universal Plug and Play",
    "definition": "Network protocol that lets devices auto-discover and request port forwarding on a router; convenient but can be a security risk if left enabled on internet-facing networks."
  },
  {
    "id": 178,
    "acronym": "UPS",
    "expansion": "Uninterruptible Power Supply",
    "definition": "A backup power device that supplies electricity to computers or equipment during short power outages or fluctuations."
  },
  {
    "id": 179,
    "acronym": "USB",
    "expansion": "Universal Serial Bus",
    "definition": "A standard interface used to connect peripherals like keyboards, mice, and storage devices to computers."
  },
  {
    "id": 180,
    "acronym": "USB-C",
    "expansion": "Universal Serial Bus Type C",
    "definition": "Reversible USB connector that can carry data, video, and power; supports USB 3.x/4, DisplayPort Alt Mode, and USB Power Delivery."
  },
  {
    "id": 181,
    "acronym": "UTM",
    "expansion": "Unified Threat Management",
    "definition": "All-in-one security appliance (often a next-gen firewall) combining functions like firewalling, IDS/IPS, AV, web filtering, and VPN."
  },
  {
    "id": 182,
    "acronym": "VA",
    "expansion": "Vertical Alignment",
    "definition": "LCD panel technology known for high contrast and deep blacks, typically with slower response times than TN/IPS."
  },
  {
    "id": 183,
    "acronym": "VDI",
    "expansion": "Virtual Desktop Infrastructure",
    "definition": "Centralized desktops run on servers and are delivered to users remotely, simplifying management and improving security."
  },
  {
    "id": 184,
    "acronym": "VGA",
    "expansion": "Video Graphics Array",
    "definition": "An older analog display connector standard used to connect monitors to computers."
  },
  {
    "id": 185,
    "acronym": "VLAN",
    "expansion": "Virtual LAN [Local Area Network]",
    "definition": "Logically segments a switch/network into separate broadcast domains for isolation and better performance without extra physical switches."
  },
  {
    "id": 186,
    "acronym": "VM",
    "expansion": "Virtual Machine",
    "definition": "A software-emulated computer running its own OS and apps on a host via a hypervisor, isolating workloads."
  },
  {
    "id": 187,
    "acronym": "VNC",
    "expansion": "Virtual Network Computer (Computing?)",
    "definition": "Remote-desktop protocol that shares a graphical desktop over the network for control and support."
  },
  {
    "id": 188,
    "acronym": "VoIP",
    "expansion": "Voice over Internet Protocol",
    "definition": "Technology that carries phone calls over IP networks instead of traditional phone lines."
  },
  {
    "id": 189,
    "acronym": "VPN",
    "expansion": "Virtual Private Network",
    "definition": "A secure network connection that encrypts internet traffic and allows private communication over public networks."
  },
  {
    "id": 190,
    "acronym": "VRAM",
    "expansion": "Video Random-access Memory",
    "definition": "A type of memory used by a computer's graphics card to store image and video data for display rendering."
  },
  {
    "id": 191,
    "acronym": "WAN",
    "expansion": "Wide Area Network",
    "definition": "A wide area network that connects computers and networks over large geographic distances, such as the internet."
  },
  {
    "id": 192,
    "acronym": "WAP",
    "expansion": "Wireless Access Point",
    "definition": "A wireless access point that connects wireless devices to a wired network, enabling Wi-Fi connectivity."
  },
  {
    "id": 193,
    "acronym": "WEP",
    "expansion": "Wired Equivalency Privacy",
    "definition": "Outdated and insecure wireless encryption standard used to protect Wi-Fi networks. It has known vulnerabilities and should not be used, replaced by WPA2/WPA3."
  },
  {
    "id": 194,
    "acronym": "WinRM",
    "expansion": "Windows Remote Management",
    "definition": "Microsoft's remote-management service using WS-Management; enables PowerShell remoting over HTTP/HTTPS (default ports 5985/5986)."
  },
  {
    "id": 195,
    "acronym": "WISP",
    "expansion": "Wireless Internet Service Provider",
    "definition": "An ISP that delivers internet access via wireless (often fixed wireless) links."
  },
  {
    "id": 196,
    "acronym": "WLAN",
    "expansion": "Wireless LAN [Local Area Network]",
    "definition": "A local area network that uses wireless communication to connect devices within a limited area like a home or office."
  },
  {
    "id": 197,
    "acronym": "WPA",
    "expansion": "Wi-Fi Protected Access",
    "definition": "A Wi-Fi security protocol that improves encryption and authentication compared to the older WEP standard."
  },
  {
    "id": 198,
    "acronym": "WWAN",
    "expansion": "Wireless Wide Area Network",
    "definition": "Cellular-based data networking (e.g., LTE/5G) for wide-area connectivity beyond local Wi-Fi."
  },
  {
    "id": 199,
    "acronym": "XaaS",
    "expansion": "Anything As A Service",
    "definition": "An umbrella term for cloud-based services delivered over the internet, such as SaaS, PaaS, and IaaS."
  },
  {
    "id": 200,
    "acronym": "XDR",
    "expansion": "Extended Detection and Response",
    "definition": "Security platform that correlates telemetry across endpoints, network, email, and cloud to detect and respond to threats faster."
  },
  {
    "id": 201,
    "acronym": "XFS",
    "expansion": "Extent File System",
    "definition": "High-performance, 64-bit journaling file system (commonly on Linux) optimized for very large files and scalability."
  },
  {
    "id": 202,
    "acronym": "XSS",
    "expansion": "Cross-site Scripting",
    "definition": "A web attack where malicious scripts are injected into trusted sites; can steal cookies, sessions, or perform actions as the user."
  }
];

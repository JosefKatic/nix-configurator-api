
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateDeviceInput {
    hostname: string;
    systemConfig: SystemConfigInput;
}

export class SystemConfigInput {
    boot: BootInput;
    core: CoreInput;
    desktop: DesktopInput;
    hardware: HardwareInput;
    server: ServerInput;
    utils: UtilsInput;
}

export class BootInput {
    legacy?: Nullable<LegacyInput>;
    quietboot?: Nullable<QuietbootInput>;
    uefi?: Nullable<UEFIInput>;
}

export class LegacyInput {
    enable?: Nullable<boolean>;
}

export class QuietbootInput {
    enable?: Nullable<boolean>;
}

export class UEFIInput {
    enable?: Nullable<boolean>;
    secureboot?: Nullable<boolean>;
}

export class CoreInput {
    disableDefaults?: Nullable<boolean>;
    locale?: Nullable<LocaleInput>;
    network?: Nullable<NetworkInput>;
    securityRules?: Nullable<SecurityRulesInput>;
    shells?: Nullable<ShellsInput>;
    storage?: Nullable<StorageInput>;
}

export class LocaleInput {
    defaultLocale?: Nullable<string>;
    supportedLocales?: Nullable<string[]>;
    timeZone?: Nullable<string>;
}

export class NetworkInput {
    domain?: Nullable<string>;
    services?: Nullable<NetworkServicesInput>;
}

export class NetworkServicesInput {
    enableNetworkManager?: Nullable<boolean>;
    enableAvahi?: Nullable<boolean>;
    enableResolved?: Nullable<boolean>;
}

export class SecurityRulesInput {
    enable?: Nullable<boolean>;
}

export class ShellsInput {
    fish?: Nullable<FishInput>;
    zsh?: Nullable<ZshInput>;
}

export class FishInput {
    enable?: Nullable<boolean>;
}

export class ZshInput {
    enable?: Nullable<boolean>;
}

export class StorageInput {
    enablePersistence?: Nullable<boolean>;
    systemDrive?: Nullable<DriveInput>;
    otherDrives?: Nullable<DriveInput[]>;
    swapFile?: Nullable<SwapFileInput>;
}

export class DriveInput {
    name?: Nullable<string>;
    path?: Nullable<string>;
    encrypted?: Nullable<boolean>;
}

export class SwapFileInput {
    enable?: Nullable<boolean>;
    path?: Nullable<string>;
    size?: Nullable<number>;
}

export class DesktopInput {
    gamemode?: Nullable<GamemodeInput>;
    wayland?: Nullable<WaylandInput>;
}

export class GamemodeInput {
    enable?: Nullable<boolean>;
}

export class WaylandInput {
    desktopManager: DesktopManagerInput;
    displayManager: DisplayManagerInput;
    windowManager: WindowManagerInput;
}

export class DesktopManagerInput {
    gnome: GnomeInput;
    plasma6: Plasma6Input;
}

export class GnomeInput {
    enable: boolean;
}

export class Plasma6Input {
    enable: boolean;
}

export class DisplayManagerInput {
    regreet: RegreetInput;
}

export class RegreetInput {
    enable: boolean;
    themes?: Nullable<ThemesInput>;
}

export class ThemesInput {
    gtk?: Nullable<ThemeInput>;
    icon?: Nullable<ThemeInput>;
    cursor?: Nullable<ThemeInput>;
}

export class ThemeInput {
    name: string;
    package: string;
}

export class WindowManagerInput {
    hyprland: HyprlandInput;
    sway: SwayInput;
}

export class HyprlandInput {
    enable?: Nullable<boolean>;
}

export class SwayInput {
    enable?: Nullable<boolean>;
}

export class HardwareInput {
    bluetooth?: Nullable<BluetoothInput>;
    cpu?: Nullable<CpuInput>;
    gpu?: Nullable<GpuInput>;
    disks?: Nullable<DisksInput>;
    misc?: Nullable<MiscInput>;
}

export class BluetoothInput {
    enable?: Nullable<boolean>;
    enableManager?: Nullable<boolean>;
}

export class CpuInput {
    intel: CpuIntelInput;
    amd: CpuAMDInput;
}

export class CpuIntelInput {
    enable?: Nullable<boolean>;
}

export class CpuAMDInput {
    enable?: Nullable<boolean>;
}

export class GpuInput {
    intel: GpuIntelInput;
    amd: GpuAMDInput;
    nvidia: GpuNvidiaInput;
}

export class GpuIntelInput {
    enable?: Nullable<boolean>;
}

export class GpuAMDInput {
    enable?: Nullable<boolean>;
}

export class GpuNvidiaInput {
    enable?: Nullable<boolean>;
    package?: Nullable<string>;
}

export class DisksInput {
    ssd?: Nullable<SSDInput>;
    hdd?: Nullable<HDDInput>;
}

export class SSDInput {
    enable?: Nullable<boolean>;
}

export class HDDInput {
    enable?: Nullable<boolean>;
}

export class MiscInput {
    trezor: TrezorInput;
    xbox: XboxInput;
    yubikey: YubikeyInput;
}

export class TrezorInput {
    enable?: Nullable<boolean>;
}

export class XboxInput {
    enable: boolean;
}

export class YubikeyInput {
    enable?: Nullable<boolean>;
}

export class ServerInput {
    services: ServerServicesInput;
}

export class ServerServicesInput {
    acme?: Nullable<AcmeInput>;
    fail2ban?: Nullable<Fail2banInput>;
    freeipaServer?: Nullable<FreeipaServerInput>;
    keycloak?: Nullable<KeycloakInput>;
    nginx?: Nullable<NginxInput>;
    mysql?: Nullable<MysqlInput>;
    postgresql?: Nullable<PostgresqlInput>;
    teamspeak?: Nullable<TeamspeakInput>;
}

export class AcmeInput {
    enable?: Nullable<boolean>;
}

export class Fail2banInput {
    enable?: Nullable<boolean>;
}

export class FreeipaServerInput {
    enable?: Nullable<boolean>;
}

export class KeycloakInput {
    enable?: Nullable<boolean>;
}

export class NginxInput {
    enable?: Nullable<boolean>;
}

export class MysqlInput {
    enable: boolean;
}

export class PostgresqlInput {
    enable?: Nullable<boolean>;
}

export class TeamspeakInput {
    enable?: Nullable<boolean>;
}

export class UtilsInput {
    autoUpgrade: AutoUpgradeInput;
    kdeconnect: KdeConnectInput;
    virtualisation: VirtualisationInput;
}

export class AutoUpgradeInput {
    enable?: Nullable<boolean>;
}

export class KdeConnectInput {
    enable?: Nullable<boolean>;
}

export class VirtualisationInput {
    docker: DockerInput;
    podman: PodmanInput;
    libvirtd: LibvirtdInput;
}

export class DockerInput {
    enable?: Nullable<boolean>;
}

export class PodmanInput {
    enable?: Nullable<boolean>;
}

export class LibvirtdInput {
    enable?: Nullable<boolean>;
}

export class UpdateDeviceInput {
    hostname?: Nullable<string>;
    systemConfig?: Nullable<SystemConfigInput>;
    _id: string;
}

export class CreateUserInput {
    exampleField: number;
}

export class UpdateUserInput {
    exampleField?: Nullable<number>;
    id: number;
}

export class CreateHomeConfigInput {
    exampleField: number;
}

export class UpdateHomeConfigInput {
    exampleField?: Nullable<number>;
    id: number;
}

export class Legacy {
    enable: boolean;
}

export class Quietboot {
    enable: boolean;
}

export class UEFI {
    enable: boolean;
    secureboot: boolean;
}

export class Boot {
    legacy: Legacy;
    quietboot: Quietboot;
    uefi: UEFI;
}

export class Locale {
    defaultLocale: string;
    supportedLocales: string[];
    timeZone: string;
}

export class NetworkServices {
    enableNetworkManager: boolean;
    enableAvahi: boolean;
    enableResolved: boolean;
}

export class Network {
    domain: string;
    services: NetworkServices;
}

export class SecurityRules {
    enable: boolean;
}

export class Fish {
    enable: boolean;
}

export class Zsh {
    enable: boolean;
}

export class Shells {
    fish: Fish;
    zsh: Zsh;
}

export class Drive {
    name: string;
    path: string;
    encrypted: boolean;
}

export class SwapFile {
    enable: boolean;
    path: string;
    size: number;
}

export class Storage {
    enablePersistence: boolean;
    systemDrive: Drive;
    otherDrives: Drive[];
    swapFile: SwapFile;
}

export class Core {
    disableDefaults: boolean;
    locale: Locale;
    network: Network;
    securityRules: SecurityRules;
    shells: Shells;
    storage: Storage;
}

export class Gamemode {
    enable: boolean;
}

export class Gnome {
    enable: boolean;
}

export class Plasma6 {
    enable: boolean;
}

export class DesktopManager {
    gnome: Gnome;
    plasma6: Plasma6;
}

export class Theme {
    name: string;
    package: string;
}

export class Themes {
    gtk?: Nullable<Theme>;
    icon?: Nullable<Theme>;
    cursor?: Nullable<Theme>;
}

export class Regreet {
    enable: boolean;
    themes?: Nullable<Themes>;
}

export class DisplayManager {
    regreet: Regreet;
}

export class Hyprland {
    enable: boolean;
}

export class Sway {
    enable: boolean;
}

export class WindowManager {
    hyprland: Hyprland;
    sway: Sway;
}

export class Wayland {
    desktopManager: DesktopManager;
    displayManager: DisplayManager;
    windowManager: WindowManager;
}

export class Desktop {
    gamemode: Gamemode;
    wayland: Wayland;
}

export class Bluetooth {
    enable: boolean;
    enableManager: boolean;
}

export class CpuIntel {
    enable: boolean;
}

export class CpuAMD {
    enable: boolean;
}

export class Cpu {
    intel: CpuIntel;
    amd: CpuAMD;
}

export class GpuIntel {
    enable: boolean;
}

export class GpuAMD {
    enable: boolean;
}

export class GpuNvidia {
    enable: boolean;
    package: string;
}

export class Gpu {
    intel: GpuIntel;
    amd: GpuAMD;
    nvidia: GpuNvidia;
}

export class HDD {
    enable: boolean;
}

export class SSD {
    enable: boolean;
}

export class Disks {
    ssd: SSD;
    hdd: HDD;
}

export class Trezor {
    enable: boolean;
}

export class Yubikey {
    enable: boolean;
}

export class Xbox {
    enable: boolean;
}

export class Misc {
    trezor: Trezor;
    xbox: Xbox;
    yubikey: Yubikey;
}

export class Hardware {
    bluetooth: Bluetooth;
    cpu: Cpu;
    gpu: Gpu;
    disks: Disks;
    misc: Misc;
}

export class Acme {
    enable: boolean;
}

export class Fail2ban {
    enable: boolean;
}

export class FreeipaServer {
    enable: boolean;
}

export class Keycloak {
    enable: boolean;
}

export class Nginx {
    enable: boolean;
}

export class Postgresql {
    enable: boolean;
}

export class Teamspeak {
    enable: boolean;
}

export class Mysql {
    enable: boolean;
}

export class ServerServices {
    acme: Acme;
    fail2ban: Fail2ban;
    freeipaServer: FreeipaServer;
    keycloak: Keycloak;
    nginx: Nginx;
    mysql: Mysql;
    postgresql: Postgresql;
    teamspeak: Teamspeak;
}

export class Server {
    services: ServerServices;
}

export class AutoUpgrade {
    enable: boolean;
}

export class Libvirtd {
    enable: boolean;
}

export class Podman {
    enable: boolean;
}

export class Docker {
    enable: boolean;
}

export class Virtualisation {
    docker: Docker;
    podman: Podman;
    libvirtd: Libvirtd;
}

export class KdeConnect {
    enable: boolean;
}

export class Utils {
    autoUpgrade: AutoUpgrade;
    kdeconnect: KdeConnect;
    virtualisation: Virtualisation;
}

export class SystemConfig {
    boot: Boot;
    core: Core;
    desktop: Desktop;
    hardware: Hardware;
    server: Server;
    utils: Utils;
}

export class Device {
    _id: string;
    hostname: string;
    systemConfig: SystemConfig;
}

export class HomeConfig {
    exampleField: number;
}

export class User {
    _id: string;
    username: string;
    homeConfig: HomeConfig[];
}

export abstract class IQuery {
    abstract getHello(): string | Promise<string>;

    abstract device(id: string): Device | Promise<Device>;

    abstract user(id: number): User | Promise<User>;

    abstract homeConfig(id: number): HomeConfig | Promise<HomeConfig>;
}

export abstract class IMutation {
    abstract createDevice(createDeviceInput: CreateDeviceInput): Device | Promise<Device>;

    abstract updateDevice(updateDeviceInput: UpdateDeviceInput): Device | Promise<Device>;

    abstract removeDevice(id: string): Device | Promise<Device>;

    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract removeUser(id: number): User | Promise<User>;

    abstract createHomeConfig(createHomeConfigInput: CreateHomeConfigInput): HomeConfig | Promise<HomeConfig>;

    abstract updateHomeConfig(updateHomeConfigInput: UpdateHomeConfigInput): HomeConfig | Promise<HomeConfig>;

    abstract removeHomeConfig(id: number): HomeConfig | Promise<HomeConfig>;
}

type Nullable<T> = T | null;

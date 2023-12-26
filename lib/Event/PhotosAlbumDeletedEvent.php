<?php

namespace OCA\Photos\Event;

use OCP\EventDispatcher\Event;
use OCA\Photos\Album\AlbumFile;
use OCA\Photos\Album\AlbumInfo;

/**
 * Event dispatched when a album is deleted.
 */
class PhotosAlbumDeletedEvent extends Event {
    /** @var AlbumInfo */
    private $albumInfo;

    /** @var array */
    private $collaborators;

    /** @var AlbumFile[] */
    private $albumFiles;

    /**
     * @param int $albumInfo The album info
     * @param array $collaborators The collaborators of the album
     * @param AlbumFile[] $albumFiles The files in the album
     */
    public function __construct(AlbumInfo $albumInfo, array $collaborators, array $albumFiles) {
        parent::__construct();
        $this->albumInfo = $albumInfo;
        $this->collaborators = $collaborators;
        $this->albumFiles = $albumFiles;
    }

    /**
     * Get the album Info.
     * 
     * @return AlbumInfo
     */
    public function getAlbumInfo(): AlbumInfo {
        return $this->albumInfo;
    }

    /**
     * Get the collaborators.
     * 
     * @return array
     */
    public function getCollaborators(): array {
        return $this->collaborators;
    }

    /**
     * Get the album file which was deleted.
     * 
     * @return AlbumFile[]
     */
    public function getAlbumFiles(): array {
        return $this->albumFiles;
    }
}

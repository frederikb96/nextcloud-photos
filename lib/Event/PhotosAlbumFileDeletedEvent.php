<?php

namespace OCA\Photos\Event;

use OCP\EventDispatcher\Event;
use OCA\Photos\Album\AlbumFile;
use OCA\Photos\Album\AlbumInfo;

/**
 * Event dispatched when a photo is deleted to an album.
 */
class PhotosAlbumFileDeletedEvent extends Event {
    /** @var AlbumInfo */
    private $albumInfo;

    /** @var array */
    private $collaborators;

    /** @var AlbumFile */
    private $albumFile;

    /**
     * @param AlbumInfo $albumInfo The album info
     * @param array $collaborators The collaborators of the album
     * @param AlbumFile $albumFile The file in the album
     */
    public function __construct(AlbumInfo $albumInfo, array $collaborators, AlbumFile $albumFile) {
        parent::__construct();
        $this->albumInfo = $albumInfo;
        $this->collaborators = $collaborators;
        $this->albumFile = $albumFile;
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
     * @return AlbumFile
     */
    public function getAlbumFile(): AlbumFile {
        return $this->albumFile;
    }
}

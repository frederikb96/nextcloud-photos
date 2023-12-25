<?php

namespace OCA\Photos\Event;

use OCP\EventDispatcher\Event;
use OCA\Photos\Album\AlbumFile;

/**
 * Event dispatched when a photo is deleted to an album.
 */
class PhotosAlbumFileDeletedEvent extends Event {
    /** @var int */
    private $albumId;

    /** @var AlbumFile */
    private $albumFile;

    /**
     * @param int $albumId The ID of the album to which the photo is added
     * @param int $albumFile The file being deleted
     */
    public function __construct(int $albumId, AlbumFile $albumFile) {
        parent::__construct();
        $this->albumId = $albumId;
        $this->albumFile = $albumFile;
    }

    /**
     * Get the album ID.
     *
     * @return int
     */
    public function getAlbumId(): int {
        return $this->albumId;
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
